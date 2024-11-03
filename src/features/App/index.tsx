import { Age } from 'components/Age';
import { Background } from 'components/Background';
import { Envelope, EnvelopeMiddle, EnvelopeTop } from 'components/Envelope';
import { Icon } from 'components/Icon';
import { Letter } from 'components/Letter';
import { Link } from 'components/Link';
import { MailLink } from 'components/MailLink';
import { ModeButton } from 'components/ModeButton';
import { Quote } from 'components/Quote';
import { RightSideContent } from 'components/RightSideContent';
import { SoundButton } from 'components/SoundButton';
import { Spacer } from 'components/Spacer';
import { useAppContext } from 'contexts/AppContext';
import { AnalyticsEvent } from 'utils/analytics';

export const App = () => {
  const { toggleColorized } = useAppContext();

  return (
    <>
      <Background />
      <RightSideContent>
        <Envelope>
          <EnvelopeTop>
            <Link
              href="https://linkedin.com/in/mrodalgaard"
              analyticsEvent={AnalyticsEvent.LinkedInIconLink}
              ariaLabel="LinkedIn"
            >
              <Icon type="linkedIn" />
            </Link>
            <Link href="https://x.com/mrodalgaard" analyticsEvent={AnalyticsEvent.XIconLink} ariaLabel="X">
              <Icon type="x" />
            </Link>
            <Link
              href="https://github.com/mrodalgaard"
              analyticsEvent={AnalyticsEvent.GithubIconLink}
              ariaLabel="GitHub"
            >
              <Icon type="github" />
            </Link>
            <Spacer />
            <ModeButton />
            <SoundButton />
            <MailLink href="mailto:mrodalgaard@gmail.com" />
          </EnvelopeTop>

          <EnvelopeMiddle>
            Martin Rodalgaard
            <br />
            Aarhus
            <br />
            Denmark
          </EnvelopeMiddle>
        </Envelope>
        <Letter>
          <p>
            Dear{' '}
            <Link href="https://whatsmybrowser.org/" analyticsEvent={AnalyticsEvent.WhoAmILink}>
              Reader
            </Link>
            ,
          </p>
          <p>
            <Link href="https://x.com/mrodalgaard" analyticsEvent={AnalyticsEvent.XLink}>
              Martin Rodalgaard Størup
            </Link>{' '}
            is <Age birthday="1986-08-22">&nbsp;&nbsp;</Age> years and living in Aarhus, Denmark, with his lovely wife
            Rikke and wonderful children Gry &amp; Thor.
          </p>
          <p>
            He has an education in{' '}
            <Link href="https://linkedin.com/in/mrodalgaard" analyticsEvent={AnalyticsEvent.LinkedInLink}>
              Electrical Engineering
            </Link>{' '}
            specialised in Embedded Systems and{' '}
            <Link href="https://github.com/mrodalgaard" analyticsEvent={AnalyticsEvent.GithubLink}>
              Programming
            </Link>
            . He currently works at{' '}
            <Link href="https://trifork.com" analyticsEvent={AnalyticsEvent.WorkLink}>
              Trifork A/S
            </Link>{' '}
            creating exciting mobile and web app solutions for customers.
          </p>
          <p>
            Martin loves{' '}
            <Link onClick={toggleColorized} analyticsEvent={AnalyticsEvent.ColorClick}>
              colors
            </Link>
            , big city traveling, running, skiing, watching movie classics and reading biographies.
          </p>
          <p>
            The gear he <i>can</i> live without (but doesn&#39;t want to) includes his 16&quot; MacBook Pro, iPhone, an
            old Canon camera, a converted Giant racing bike and an Omega Seamaster on his wrist.
          </p>

          <Quote />
        </Letter>
      </RightSideContent>
    </>
  );
};
