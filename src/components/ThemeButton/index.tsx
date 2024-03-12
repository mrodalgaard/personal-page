import { Icon } from 'components/Icon';
import { Link } from 'components/Link';
import { useAppContext } from 'contexts/AppContext';
import { useSounds } from 'hooks/useSounds';
import { AnalyticsEvent } from 'utils/analytics';

export const ThemeButton = () => {
  const { theme, toggleTheme } = useAppContext();
  const { playButtonSound } = useSounds();

  const onClick = () => {
    toggleTheme();
    playButtonSound();
  };

  return (
    <Link aria-label="Theme button" onClick={onClick} analyticsEvent={AnalyticsEvent.ThemeClick}>
      {theme === 'dark' ? <Icon type="dark" /> : <Icon type="light" />}
    </Link>
  );
};
