import * as React from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import noteImg from '../../assets/img/note.jpg';
import Age from '../Age';
import AppContext from '../App/AppContext';
import Link from '../Link';
import Quote from '../Quote';
import { IQuote } from '../Quote/Quotes';

const Container = styled.div`
  position: relative;
  background: url(${noteImg});
  border-radius: 1px;
  margin-bottom: 20px;
  padding: 20px;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

interface IProps {
  initialQuote?: IQuote;
}

const Letter = (props: IProps) => {
  const { initialQuote } = props;

  const { color, toggleBackground, toggleColor } = useContext(AppContext);

  const onColorsClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (toggleBackground && toggleColor) {
      toggleBackground();
      toggleColor();
    }
  };

  return (
    <Container>
      <p>
        Dear{' '}
        <Link href="http://www.whatsmybrowser.org/" color={color}>
          Reader
        </Link>
        ,
      </p>
      <p>
        <Link href="http://facebook.com/mrodalgaard" color={color}>
          Martin Rodalgaard
        </Link>{' '}
        is a <Age birthday="08-22-1986" updateInterval={100} /> year old
        engineer living in Aarhus, Denmark, with his wonderful girlfriend Rikke
        and his daughter Gry.
      </p>
      <p>
        He is educated in{' '}
        <Link href="http://linkedin.com/in/mrodalgaard" color={color}>
          Electrical Engineering
        </Link>{' '}
        specialised in Embedded Systems and{' '}
        <Link href="http://github.com/mrodalgaard" color={color}>
          Programming
        </Link>
        . He currently works at{' '}
        <Link href="http://trifork.com" color={color}>
          Trifork A/S
        </Link>{' '}
        as a Software Pilot creating mobile apps and future technology.
      </p>
      <p>
        Martin loves{' '}
        <Link href="#" onClick={onColorsClick} color={color}>
          colors
        </Link>
        , big city traveling, skiing, watching movie classics and reading
        biographies.
      </p>
      <p>
        The gear he <u>can</u> live without (but doesn&#39;t want to) includes
        his 16" MacBook Pro, a broken iPhone X, an old Canon 550D, a converted
        Giant racing bike and an Omega Seamaster Aqua Terra on his wrist.
      </p>
      <Quote color={color} initialQuote={initialQuote} />
    </Container>
  );
};

export default Letter;
