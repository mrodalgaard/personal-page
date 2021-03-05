import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

const Untyped = styled.span<{ opacity: number }>`
  opacity: ${({ opacity }) => opacity};
`;

interface IProps {
  children: ReactNode[];
  delay?: number;
  opacity?: number;
  onDone?: () => void;
}

interface TypeIndex {
  lineIndex: number;
  characterIndex: number;
}

// Recursive extract text from children of elements
const extractTextFromElement = (element: ReactNode): any[] => {
  if (React.isValidElement<Element>(element)) {
    return React.Children.map(element.props.children ?? [], (child) =>
      extractTextFromElement(child)
    );
  } else if (Array.isArray(element)) {
    return element.map((el) => extractTextFromElement(el));
  } else {
    return [element ?? ''];
  }
};

const Typewriter = ({
  children,
  delay = 30,
  opacity = 0.1,
  onDone = () => {},
}: IProps) => {
  // Extract text from children and join them into an array of lines/strings
  const lines = useMemo(
    () =>
      extractTextFromElement(children).map((line: string[]) => line.join('')),
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
  const [typeIndex, setTypeIndex] = useState<TypeIndex>({
    lineIndex: 0,
    characterIndex: 0,
  });

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
    // Set output to children immediately if delay is zero
    if (delay === 0) {
      onDone();
      return setOutput(children);
    }

    // Increment line and character index at interval
    const interval = setInterval(() => {
      setTypeIndex((typeIndex) => {
        let lineIndex = typeIndex.lineIndex;
        let characterIndex = typeIndex.characterIndex;

        const line = lines[typeIndex.lineIndex];

        // Determine if typing is done or line/character should be incremented
        if (typeIndex.characterIndex > line.length) {
          if (lines.length <= typeIndex.lineIndex + 1) {
            clearInterval(interval);
            onDone();
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
    return () => clearInterval(interval);
  }, [lines, children, delay, onDone]);

  return <>{output}</>;
};

export default Typewriter;
