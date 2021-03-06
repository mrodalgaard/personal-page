import { useCallback, useEffect, useMemo, useState } from 'react';

interface IProps {
  isTyping: boolean;
}

const useSound = ({ isTyping }: IProps) => {
  const [sound, setSound] = useState(false);

  const typeSoundAudio = useMemo(() => new Audio('/sounds/type.mp3'), []);

  const playTypeSound = useCallback(() => {
    typeSoundAudio.loop = true;
    typeSoundAudio.play();
  }, [typeSoundAudio]);

  const stopTypeSound = useCallback(() => {
    typeSoundAudio.pause();
  }, [typeSoundAudio]);

  // Determine if sound should play or not
  useEffect(() => {
    if (sound && isTyping) {
      playTypeSound();
    } else {
      stopTypeSound();
    }
  }, [sound, isTyping, playTypeSound, stopTypeSound]);

  // Stop all sounds on cleanup
  useEffect(() => {
    return () => {
      stopTypeSound();
    };
  }, [stopTypeSound]);

  const toggleSound = () => {
    setSound((sound) => !sound);
  };

  return [sound, toggleSound] as const;
};

export default useSound;
