import Link from 'components/Link';
import MailLink from 'components/MailLink';
import { Paper } from 'components/Shared/Paper';
import Context from 'context';
import { useContext } from 'react';
import { GitHub, Linkedin, Twitter } from 'react-feather';
import styled from 'styled-components';
import { AnalyticsEvent } from 'utils/analytics';

const EnvelopeTop = styled.div`
  border-bottom: 60px solid ${(props) => props.theme.grey};
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
`;

const EnvelopeBody = styled(Paper)`
  display: flex;
  flex-direction: column;
  height: 200px;
  padding: 5px;
`;

const EnvelopeBodyTop = styled.div`
  display: flex;
  place-items: start;

  *:last-child {
    margin-left: auto;
  }
`;

const EnvelopeText = styled.header`
  align-self: center;
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  line-height: 0.5rem;
  margin-block: 1rem;
`;

const FilledLinkedInIcon = styled(Linkedin)`
  fill: currentColor;
`;

const FilledGitHubIcon = styled(GitHub)`
  fill: currentColor;
`;

const FilledTwitterIcon = styled(Twitter)`
  fill: currentColor;
`;

export default function Envelope() {
  const { color } = useContext(Context);

  return (
    <>
      <EnvelopeTop />

      <EnvelopeBody>
        <EnvelopeBodyTop>
          <Link
            href="https://linkedin.com/in/mrodalgaard"
            color={color}
            analyticsEvent={AnalyticsEvent.LinkedInIconLink}
            ariaLabel="LinkedIn"
          >
            <FilledLinkedInIcon />
          </Link>
          <Link
            href="https://github.com/mrodalgaard"
            color={color}
            analyticsEvent={AnalyticsEvent.GithubIconLink}
            ariaLabel="GitHub"
          >
            <FilledGitHubIcon />
          </Link>
          <Link
            href="https://twitter.com/mrodalgaard"
            color={color}
            analyticsEvent={AnalyticsEvent.TwitterIconLink}
            ariaLabel="Twitter"
          >
            <FilledTwitterIcon />
          </Link>
          <MailLink href="mailto:mrodalgaard@gmail.com" color={color} />
        </EnvelopeBodyTop>

        <EnvelopeText>
          <Heading>Martin Rodalgaard</Heading>
          <Heading>Aarhus</Heading>
          <Heading>Denmark</Heading>
        </EnvelopeText>
      </EnvelopeBody>
    </>
  );
}
