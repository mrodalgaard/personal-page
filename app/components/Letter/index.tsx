import Link from 'components/Link';
import Quote from 'components/Quote';
import { IQuote } from 'components/Quote/useQuote';
import { Paper } from 'components/Shared/Paper';
import Typewriter from 'components/Typewriter';
import Context from 'context';
import { useContext } from 'react';
import { AnalyticsEvent } from 'utils/analytics';
import { TYPEWRITER_DELAY } from 'utils/constants';
import useAge from './useAge';

export default function Letter({ animate = true, initialQuote }: { animate?: boolean; initialQuote?: IQuote }) {
  const { color, toggleBackground, toggleColor } = useContext(Context);

  const age = useAge({ birthday: '1986-08-22' });

  const onColorsClick = () => {
    toggleBackground && toggleBackground();
    toggleColor && toggleColor();
  };

  return (
    <Paper>
      <Typewriter delay={animate ? TYPEWRITER_DELAY : 0}>
        <p>
          Dear{' '}
          <Link href="https://whatsmybrowser.org/" color={color} analyticsEvent={AnalyticsEvent.WhoAmILink}>
            Reader
          </Link>
          ,
        </p>
        <p>
          <Link href="https://twitter.com/mrodalgaard" color={color} analyticsEvent={AnalyticsEvent.TwitterLink}>
            Martin Rodalgaard
          </Link>{' '}
          is a {age} year old engineer living in Aarhus, Denmark, with his wonderful girlfriend Rikke and children Gry
          &amp; Thor.
        </p>
        <p>
          He is educated in{' '}
          <Link href="https://linkedin.com/in/mrodalgaard" color={color} analyticsEvent={AnalyticsEvent.LinkedInLink}>
            Electrical Engineering
          </Link>{' '}
          specialised in Embedded Systems and{' '}
          <Link href="https://github.com/mrodalgaard" color={color} analyticsEvent={AnalyticsEvent.GithubLink}>
            Programming
          </Link>
          . He currently works at{' '}
          <Link href="https://trifork.com" color={color} analyticsEvent={AnalyticsEvent.WorkLink}>
            Trifork A/S
          </Link>{' '}
          creating exciting mobile and web app solutions for customers.
        </p>
        <p>
          Martin loves{' '}
          <Link onClick={onColorsClick} analyticsEvent={AnalyticsEvent.ColorClick} color={color}>
            colors
          </Link>
          , big city traveling, running, skiing, watching movie classics and reading biographies.
        </p>
        <p>
          The gear he can live without (but doesn&#39;t want to) includes his 16&quot; MacBook Pro, iPhone 12 Pro, an
          old Canon camera, a converted Giant racing bike and an Omega Seamaster on his wrist.
        </p>

        <Quote color={color} initialQuote={initialQuote} />
      </Typewriter>
    </Paper>
  );
}
