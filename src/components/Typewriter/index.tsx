import { Children, ReactNode, isValidElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { TypewriterButtons } from './TypewriterButtons';
import { TYPEWRITER_DELAY, TYPEWRITER_OPACITY } from './constants';
import { useSound } from './useSound';

const Untyped = styled.span<{ opacity: number }>`
  opacity: ${({ opacity }) => opacity};
`;

const TypewriterWrapper = styled.div`
  display: contents;
`;

interface TypeIndex {
  lineIndex: number;
  characterIndex: number;
}

const initialTypeIndex: TypeIndex = {
  lineIndex: 0,
  characterIndex: 0,
};

type NestedArray<T> = Array<T> | Array<NestedArray<T>>;

// Recursive extract text from children of element
const extractTextFromElement = (element: ReactNode | HTMLCollection): NestedArray<string> => {
  if (isValidElement<Element>(element)) {
    return Children.map(element.props.children ?? [], (child) => extractTextFromElement(child));
  } else if (Array.isArray(element)) {
    return element.map((el) => extractTextFromElement(el));
  } else {
    return [element?.toString() ?? ''];
  }
};

export const Typewriter = ({
  children: innerChildren,
  delay = TYPEWRITER_DELAY,
  opacity = TYPEWRITER_OPACITY,
  onDone,
}: {
  children: ReactNode;
  delay?: number;
  opacity?: number;
  onDone?: () => void;
}) => {
  // Ensure that react node children is an array
  const children = useMemo(() => (Array.isArray(innerChildren) ? innerChildren : [innerChildren]), [innerChildren]);

  // Extract text from children and join them into an array of lines/strings
  const lines = useMemo(
    () => extractTextFromElement(children).map((line) => (Array.isArray(line) ? line.join('') : line)),
    [children]
  );

  const [output, setOutput] = useState<ReactNode[]>(
    // Initially all lines are untyped
    lines.map((line, index) => (
      <p key={index}>
        <Untyped opacity={opacity}>{line}</Untyped>
      </p>
    ))
  );

  // Keep track of which line and character should be typed next
  const [typeIndex, setTypeIndex] = useState(initialTypeIndex);

  const interval = useRef<NodeJS.Timeout | undefined>();

  const isTyping = interval.current !== undefined;

  const [sound, toggleSound] = useSound({ isTyping });

  // Set output to children and clear state when done
  const done = useCallback(() => {
    clearInterval(interval.current);
    interval.current = undefined;
    setTypeIndex({ lineIndex: children.length - 1, characterIndex: 0 });
    setOutput(children);
    onDone && onDone();
  }, [children, onDone]);

  // Type character and set lines/children
  useEffect(() => {
    setOutput((output) => {
      const newOutput = output.slice();

      const line = lines[typeIndex.lineIndex];

      // Use the original child if done typing line
      if (typeIndex.characterIndex >= line.length) {
        const child = children[typeIndex.lineIndex];
        if (child) {
          newOutput[typeIndex.lineIndex] = child;
          return newOutput;
        }
      }

      // Create line with partially typed characters
      const typedLine = line.slice(0, typeIndex.characterIndex);
      const untypedLine = line.slice(typeIndex.characterIndex);

      newOutput[typeIndex.lineIndex] = (
        <p key={typeIndex.lineIndex}>
          {typedLine}
          <Untyped opacity={opacity}>{untypedLine}</Untyped>
        </p>
      );

      return newOutput;
    });
  }, [lines, typeIndex, children, opacity]);

  useEffect(() => {
    if (delay === 0) {
      return done();
    }

    // Increment line and character index at interval
    interval.current = setInterval(() => {
      setTypeIndex((typeIndex) => {
        let { lineIndex, characterIndex } = typeIndex;
        const line = lines[typeIndex.lineIndex];

        // Determine if typing is done or line/character should be incremented
        if (typeIndex.characterIndex > line.length) {
          if (lines.length <= typeIndex.lineIndex + 1) {
            done();
          } else {
            lineIndex++;
            characterIndex = 0;
          }
        } else {
          characterIndex++;
        }

        return { lineIndex, characterIndex };
      });
    }, delay);
    return () => clearInterval(interval.current);
  }, [lines, delay, done]);

  return (
    <TypewriterWrapper onClick={done}>
      {isTyping && <TypewriterButtons sound={sound} onSoundClick={toggleSound}></TypewriterButtons>}
      {output}
    </TypewriterWrapper>
  );
};
