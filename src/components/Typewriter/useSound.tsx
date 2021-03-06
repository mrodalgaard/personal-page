import { useCallback, useEffect, useMemo, useState } from 'react';

interface IProps {
  isTyping: boolean;
}

const useSound = ({ isTyping }: IProps) => {
  const [sound, setSound] = useState(false);

  const typeSoundAudio = useMemo(() => new Audio('/sounds/type.mp3'), []);
  const carriageSoundAudio = useMemo(
    () => new Audio('/sounds/carriage.wav'),
    []
  );

  const playTypeSound = useCallback(() => {
    typeSoundAudio.loop = true;
    typeSoundAudio.play();
  }, [typeSoundAudio]);

  const stopTypeSound = useCallback(() => {
    typeSoundAudio.pause();
  }, [typeSoundAudio]);

  const playCarriageSound = useCallback(() => {
    carriageSoundAudio.play();
  }, [carriageSoundAudio]);

  const stopCarriageSound = useCallback(() => {
    carriageSoundAudio.pause();
  }, [carriageSoundAudio]);

  // Determine if typing sound should play or not
  useEffect(() => {
    if (sound && isTyping) {
      playTypeSound();
    } else {
      stopTypeSound();
    }
  }, [sound, isTyping, playTypeSound, stopTypeSound]);

  // Determine if carriage sound should play or not
  useEffect(() => {
    if (sound && !isTyping) {
      playCarriageSound();
    } else {
      stopCarriageSound();
    }
  }, [sound, isTyping, playCarriageSound, stopCarriageSound]);

  // Stop all sounds on cleanup
  useEffect(() => {
    return () => {
      stopTypeSound();
      stopCarriageSound();
    };
  }, [stopTypeSound, stopCarriageSound]);

  const toggleSound = () => {
    setSound((sound) => !sound);
  };

  return [sound, toggleSound] as const;
};

export default useSound;
