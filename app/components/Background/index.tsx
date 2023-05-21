import backgroundImageColors from 'assets/img/background-colors.jpg';
import backgroundImage from 'assets/img/background.jpg';
import Context, { AppBackground } from 'context';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { PHONE_SIZE_PX } from 'utils/constants';
import usePrevious from './usePrevious';

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  overflow: hidden;
  z-index: -1;
`;

const Img = styled(Image)`
  object-fit: cover;

  animation-duration: 4s;
  animation-fill-mode: both;

  -webkit-user-drag: none;
`;

const ImgFadeIn = styled(Img as any)`
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

const ImgFadeOut = styled(Img as any)`
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

export default function Background() {
  const { background } = useContext(Context);
  const prevBackground = usePrevious(background);
  const [show, setShow] = useState(false);

  // Do not render background on phone sizes or server side
  useEffect(() => {
    setShow(window.innerWidth > PHONE_SIZE_PX);
  }, []);

  console.log([background, show, prevBackground]);

  return (
    <Container>
      {show ?? (
        <ImgFadeIn
          src={background === AppBackground.colored ? backgroundImageColors : backgroundImage}
          alt="Background"
          fill={true}
          sizes="100vw 100vw"
        />
      )}
      {prevBackground ?? (
        <ImgFadeOut
          src={background !== AppBackground.colored ? backgroundImageColors : backgroundImage}
          alt="Previous background"
          fill={true}
          sizes="100vw 100vw"
        />
      )}
    </Container>
  );
}
