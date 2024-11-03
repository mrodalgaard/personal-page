import { useAppContext } from 'contexts/AppContext';
import { useCallback, useEffect, useMemo } from 'react';

export const useSounds = () => {
  const { sound } = useAppContext();

  const buttonSoundAudio = useMemo(
    () => (typeof Audio !== 'undefined' ? new Audio('/sounds/button.wav') : undefined),
    []
  );
  const typeSoundAudio = useMemo(() => (typeof Audio !== 'undefined' ? new Audio('/sounds/type.mp3') : undefined), []);
  const carriageSoundAudio = useMemo(
    () => (typeof Audio !== 'undefined' ? new Audio('/sounds/carriage.wav') : undefined),
    []
  );

  const playButtonSound = useCallback(() => {
    if (sound) {
      buttonSoundAudio?.play();
    }
  }, [sound, buttonSoundAudio]);

  const stopButtonSound = useCallback(() => {
    buttonSoundAudio?.pause();
  }, [buttonSoundAudio]);

  const playTypingSounds = useCallback(() => {
    if (typeSoundAudio) {
      typeSoundAudio.loop = true;
    }
    if (sound) {
      typeSoundAudio?.play();
    }
  }, [sound, typeSoundAudio]);

  const stopTypingSounds = useCallback(() => {
    typeSoundAudio?.pause();
  }, [typeSoundAudio]);

  const playCarriageSound = useCallback(() => {
    if (sound) {
      carriageSoundAudio?.play();
    }
  }, [sound, carriageSoundAudio]);

  const stopCarriageSound = useCallback(() => {
    carriageSoundAudio?.pause();
  }, [carriageSoundAudio]);

  const stopAllSounds = useCallback(() => {
    stopButtonSound();
    stopTypingSounds();
    stopCarriageSound();
  }, [stopButtonSound, stopTypingSounds, stopCarriageSound]);

  // Stop all sounds when sound is toggled off
  useEffect(() => {
    if (!sound) {
      stopAllSounds();
    }
  }, [sound, stopAllSounds]);

  return {
    playButtonSound,
    stopButtonSound,
    playTypingSounds,
    stopTypingSounds,
    playCarriageSound,
    stopCarriageSound,
    stopAllSounds,
  };
};
