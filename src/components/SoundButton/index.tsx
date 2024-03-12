import { Icon } from 'components/Icon';
import { Link } from 'components/Link';
import { useAppContext } from 'contexts/AppContext';
import { useSounds } from 'hooks/useSounds';
import { AnalyticsEvent } from 'utils/analytics';

export const SoundButton = () => {
  const { sound, toggleSound } = useAppContext();

  const { playButtonSound, stopAllSounds } = useSounds();

  const onClick = () => {
    toggleSound();
    stopAllSounds();
    playButtonSound();
  };

  return (
    <Link aria-label="Sound button" onClick={onClick} analyticsEvent={AnalyticsEvent.SoundClick}>
      {sound ? <Icon type="sound" /> : <Icon type="mute" />}
    </Link>
  );
};
