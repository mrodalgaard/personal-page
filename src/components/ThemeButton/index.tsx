import Icon from 'components/Icon';
import Link from 'components/Link';
import { useAppContext } from 'contexts/AppContext';
import { AnalyticsEvent, logEvent } from 'utils/analytics';

export default function ThemeButton() {
  const { theme, toggleTheme } = useAppContext();

  const localOnClick = () => {
    logEvent(AnalyticsEvent.ThemeClick);
    toggleTheme && toggleTheme();
  };

  return (
    <Link aria-label="Theme button" onClick={localOnClick}>
      {theme === 'dark' ? <Icon type="dark" /> : <Icon type="light" />}
    </Link>
  );
}
