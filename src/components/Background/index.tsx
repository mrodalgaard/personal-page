import backgroundColorsImg from 'assets/img/background-colors.jpg';
import backgroundLowImg from 'assets/img/background-low.jpg';
import backgroundImg from 'assets/img/background.jpg';
import AppContext from 'components/App/AppContext';
import React, { useContext, useEffect, useRef } from 'react';
import {
  ImageProps,
  LazyImage,
  LazyImageRenderPropArgs,
  RefArg,
} from 'react-lazy-images';
import styled from 'styled-components';
import { AppBackground } from 'util/constants';

const Img = styled.img`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: -1;
  object-fit: cover;

  animation-duration: 4s;
  animation-fill-mode: both;
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

const Background = () => {
  const { background } = useContext(AppContext);

  const firstUpdate = useRef(true);

  // Use update flag to accommodate for first greyscale background fade in
  useEffect(() => {
    const timeoutId = window.setTimeout(
      () => (firstUpdate.current = false),
      500
    );
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // Do not render background on phone size screens
  if (window.innerWidth < 500) {
    return null;
  }

  const placeholder = ({
    imageProps,
    ref,
  }: LazyImageRenderPropArgs & RefArg) => (
    <ImgFadeIn ref={ref} src={backgroundLowImg} alt={imageProps.alt} />
  );

  const actualFadeIn = ({ imageProps }: { imageProps: ImageProps }) => (
    <ImgFadeIn {...imageProps} />
  );

  const actualFadeOut = ({ imageProps }: { imageProps: ImageProps }) => (
    <ImgFadeOut
      hidden={firstUpdate.current && background === AppBackground.greyscale}
      {...imageProps}
    />
  );

  return (
    <>
      <LazyImage
        src={backgroundImg}
        placeholder={placeholder}
        actual={actualFadeIn}
        alt="Background"
      />
      <LazyImage
        src={backgroundColorsImg}
        placeholder={placeholder}
        actual={
          background === AppBackground.colored ? actualFadeIn : actualFadeOut
        }
        alt="Background Color"
      />
    </>
  );
};

export default Background;
