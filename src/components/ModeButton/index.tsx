import { Icon } from 'components/Icon';
import { Link } from 'components/Link';
import { AppContext } from 'contexts/AppContext';
import { Mode } from 'contexts/ThemeContext';
import { useSounds } from 'hooks/useSounds';
import { MouseEvent, useCallback, useContext } from 'react';
import { AnalyticsEvent } from 'utils/analytics';

export const ModeButton = () => {
  const { mode, toggleMode, reducedMotion } = useContext(AppContext);
  const { playButtonSound } = useSounds();

  const toggleWithAnimation = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      playButtonSound();

      // Get the mouse click position and calculate the end radius
      const x = event.clientX;
      const y = event.clientY;
      const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

      // Start the view transition with clip path animation
      const transition = document.startViewTransition(toggleMode);
      transition.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`],
          },
          {
            duration: reducedMotion ? 0 : 1000,
            easing: 'ease-out',
            pseudoElement: '::view-transition-new(root)',
          }
        );
      });
    },
    [toggleMode, reducedMotion, playButtonSound]
  );

  const getIcon = (mode: Mode) => {
    switch (mode) {
      case Mode.system:
        return <Icon type="system" />;
      case Mode.light:
        return <Icon type="light" />;
      case Mode.dark:
        return <Icon type="dark" />;
    }
  };

  return (
    <Link onClick={toggleWithAnimation} analyticsEvent={AnalyticsEvent.ModeClick} ariaLabel="Theme button">
      {getIcon(mode)}
    </Link>
  );
};
