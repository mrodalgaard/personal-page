import backgroundImageColors from 'assets/img/background-colors.jpg';
import backgroundImage from 'assets/img/background.jpg';
import { useAppContext } from 'contexts/AppContext';
import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components';
import { PHONE_SIZE_PX } from 'utils/constants';
import usePrevious from './usePrevious';

const Img = styled(LazyLoadImage)`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: -1;
  object-fit: cover;
  -webkit-user-drag: none;

  animation-duration: 4s;
  animation-fill-mode: both;
`;

const ImgFadeIn = styled(Img)`
  animation-name: fadeIn;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

const ImgFadeOut = styled(Img)`
  animation-name: fadeOut;

  @keyframes fadeOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
`;

const Background = () => {
  const { colorized } = useAppContext();
  const prevColorized = usePrevious(colorized);
  const [show, setShow] = useState(false);

  // Do not render background on phone sizes or server side
  useEffect(() => {
    setShow(window.innerWidth > PHONE_SIZE_PX);
  }, []);

  return (
    <>
      {show && <ImgFadeIn src={colorized ? backgroundImageColors : backgroundImage} aria-hidden sizes="100vw 100vw" />}
      {show && prevColorized !== undefined && colorized !== prevColorized && (
        <ImgFadeOut
          // Key is needed to force react to rerender img instead of just
          // replacing src and thereby skipping animation.
          key={+colorized}
          src={colorized ? backgroundImage : backgroundImageColors}
          aria-hidden
          sizes="100vw 100vw"
        />
      )}
    </>
  );
};

export default Background;
