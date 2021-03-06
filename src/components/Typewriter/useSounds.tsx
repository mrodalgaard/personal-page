import { useCallback, useEffect, useMemo } from 'react';

const useSounds = () => {
  const typeSoundAudio = useMemo(() => new Audio('/sounds/type.mp3'), []);

  const playTypeSound = useCallback(() => {
    typeSoundAudio.loop = true;
    typeSoundAudio.play();
  }, [typeSoundAudio]);

  const stopTypeSound = useCallback(() => {
    typeSoundAudio.pause();
  }, [typeSoundAudio]);

  useEffect(() => {
    return () => {
      stopTypeSound();
    };
  }, [stopTypeSound]);

  return { playTypeSound, stopTypeSound };
};

export default useSounds;
