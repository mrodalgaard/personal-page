import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import AppContext from 'components/App/AppContext';
import MailLink from 'components/MailLink';
import { Paper } from 'components/Shared/Paper';
import SocialLink from 'components/SocialLink';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { LogEvent } from 'util/analytics';
import { AppColors } from 'util/theme';

const EnvelopeTop = styled.div`
  border-bottom: 60px solid ${AppColors.grey};
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
`;

const EnvelopeBody = styled(Paper)`
  height: 200px;
  padding: 5px;
  font-size: 20px;
`;

const EnvelopeText = styled.header`
  width: 50%;
  height: 60px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  h1,
  h2 {
    font-size: 20px;
    line-height: 8px;
  }
`;

const Envelope = () => {
  const { color } = useContext(AppContext);

  return (
    <>
      <EnvelopeTop />
      <EnvelopeBody>
        <SocialLink
          href="https://facebook.com/mrodalgaard"
          icon={faFacebookF}
          color={color}
          logEvent={LogEvent.FacebookLink}
          ariaLabel="facebook"
        />
        <SocialLink
          href="https://linkedin.com/in/mrodalgaard"
          icon={faLinkedin}
          color={color}
          logEvent={LogEvent.LinkedInLink}
          ariaLabel="linkedin"
        />
        <SocialLink
          href="https://github.com/mrodalgaard"
          icon={faGithub}
          color={color}
          logEvent={LogEvent.GithubLink}
          ariaLabel="github"
        />
        <SocialLink
          href="https://twitter.com/mrodalgaard"
          icon={faTwitter}
          color={color}
          logEvent={LogEvent.TwitterLink}
          ariaLabel="twitter"
        />
        <MailLink href="mailto:mrodalgaard@gmail.com" color={color} />
        <EnvelopeText>
          <h1>Martin Rodalgaard</h1>
          <h2>Aarhus</h2>
          <h2>Denmark</h2>
        </EnvelopeText>
      </EnvelopeBody>
    </>
  );
};

export default Envelope;
