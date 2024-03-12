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
    sound && buttonSoundAudio?.play();
  }, [sound, buttonSoundAudio]);

  const stopButtonSound = useCallback(() => {
    buttonSoundAudio?.pause();
  }, [buttonSoundAudio]);

  const playTypingSounds = useCallback(() => {
    typeSoundAudio && (typeSoundAudio.loop = true);
    sound && typeSoundAudio?.play();
  }, [sound, typeSoundAudio]);

  const stopTypingSounds = useCallback(() => {
    typeSoundAudio?.pause();
  }, [typeSoundAudio]);

  const playCarriageSound = useCallback(() => {
    sound && carriageSoundAudio?.play();
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
    !sound && stopAllSounds();
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
