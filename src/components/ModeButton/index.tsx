import { Icon } from 'components/Icon';
import { Link } from 'components/Link';
import { useAppContext } from 'contexts/AppContext';
import { useSounds } from 'hooks/useSounds';
import { MouseEvent, useCallback } from 'react';
import { AnalyticsEvent } from 'utils/analytics';

export const ModeButton = () => {
  const { mode, reducedMotion, toggleMode } = useAppContext();
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

  return (
    <Link onClick={toggleWithAnimation} analyticsEvent={AnalyticsEvent.ModeClick} ariaLabel="Theme button">
      {mode === 'dark' ? <Icon type="dark" /> : <Icon type="light" />}
    </Link>
  );
};
