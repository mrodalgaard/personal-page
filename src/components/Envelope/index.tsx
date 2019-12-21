import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import * as React from "react";
import { useContext } from "react";
import styled from "styled-components";
import noteImg from "../../assets/img/note.jpg";
import { AppColors } from "../../util/theme";
import AppContext from "../App/AppContext";
import MailLink from "../MailLink";
import SocialLink from "../SocialLink";

const EnvelopeTop = styled.div`
  border-bottom: 60px solid ${AppColors.grey};
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
`;

const EnvelopeBody = styled.div`
  border-radius: 1px;
  background: url(${noteImg});
  margin-bottom: 20px;

  position: relative;
  height: 200px;
  padding: 5px;
  font-size: 20px;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const EnvelopeText = styled.p`
  width: 50%;
  height: 60px;
  font-weight: bold;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const Envelope = () => {
  const { color } = useContext(AppContext);

  return (
    <>
      <EnvelopeTop />
      <EnvelopeBody>
        <SocialLink
          href="http://facebook.com/mrodalgaard"
          icon={faFacebookF}
          color={color}
        />
        <SocialLink
          href="http://linkedin.com/in/mrodalgaard"
          icon={faLinkedin}
          color={color}
        />
        <SocialLink
          href="http://github.com/mrodalgaard"
          icon={faGithub}
          color={color}
        />
        <SocialLink
          href="http://twitter.com/mrodalgaard"
          icon={faTwitter}
          color={color}
        />
        <MailLink href="mailto:mrodalgaard@gmail.com" color={color} />
        <EnvelopeText>
          Martin Rodalgaard
          <br />
          Aarhus
          <br />
          Denmark
        </EnvelopeText>
      </EnvelopeBody>
    </>
  );
};

export default Envelope;
