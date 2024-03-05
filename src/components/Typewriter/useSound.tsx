import { useCallback, useEffect, useMemo, useState } from 'react';

export const useSound = ({ isTyping }: { isTyping: boolean }) => {
  const [sound, setSound] = useState(false);

  const typeSoundAudio = useMemo(() => (typeof Audio !== 'undefined' ? new Audio('/sounds/type.mp3') : undefined), []);
  const carriageSoundAudio = useMemo(
    () => (typeof Audio !== 'undefined' ? new Audio('/sounds/carriage.wav') : undefined),
    []
  );

  const playTypeSound = useCallback(() => {
    typeSoundAudio && (typeSoundAudio.loop = true);
    typeSoundAudio?.play();
  }, [typeSoundAudio]);

  const stopTypeSound = useCallback(() => {
    typeSoundAudio?.pause();
  }, [typeSoundAudio]);

  const playCarriageSound = useCallback(() => {
    carriageSoundAudio?.play();
  }, [carriageSoundAudio]);

  const stopCarriageSound = useCallback(() => {
    carriageSoundAudio?.pause();
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
