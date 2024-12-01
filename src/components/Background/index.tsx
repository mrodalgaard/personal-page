import backgroundImageColors from 'assets/img/background-colors.jpg';
import backgroundImage from 'assets/img/background.jpg';
import { AppContext } from 'contexts/AppContext';
import { useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled, { keyframes } from 'styled-components';
import { usePrevious } from './usePrevious';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: none;

  ${({ theme }) => theme.mediaQueries.sm} {
    display: block;
  }
`;

const Img = styled(LazyLoadImage)`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: -1;
  object-fit: cover;
  -webkit-user-drag: none;
`;

const FadeInKeyframes = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const ImgFadeIn = styled(Img)`
  animation: 4s both ${FadeInKeyframes};
`;

const ImgFadeOut = styled(Img)`
  animation: 4s both reverse ${FadeInKeyframes};
`;

export const Background = () => {
  const { colorized } = useContext(AppContext);
  const prevColorized = usePrevious(colorized);

  return (
    <Container>
      {<ImgFadeIn src={colorized ? backgroundImageColors : backgroundImage} aria-hidden sizes="100vw 100vw" />}
      {prevColorized !== undefined && colorized !== prevColorized && (
        <ImgFadeOut
          // Key is needed to force react to rerender img instead of just
          // replacing src and thereby skipping animation.
          key={+colorized}
          src={colorized ? backgroundImage : backgroundImageColors}
          aria-hidden
          sizes="100vw 100vw"
        />
      )}
    </Container>
  );
};
