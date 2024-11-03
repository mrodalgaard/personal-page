import { Icon } from 'components/Icon';
import { Link } from 'components/Link';
import { useAppContext } from 'contexts/AppContext';
import { useSounds } from 'hooks/useSounds';
import { AnalyticsEvent } from 'utils/analytics';

export const ModeButton = () => {
  const { mode, toggleMode } = useAppContext();
  const { playButtonSound } = useSounds();

  const onClick = () => {
    toggleMode();
    playButtonSound();
  };

  return (
    <Link onClick={onClick} analyticsEvent={AnalyticsEvent.ThemeClick} ariaLabel="Theme button">
      {mode === 'dark' ? <Icon type="dark" /> : <Icon type="light" />}
    </Link>
  );
};
