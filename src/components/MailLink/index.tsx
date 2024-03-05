import mailImage from 'assets/img/mail.png';
import styled from 'styled-components';
import { AnalyticsEvent, logEvent } from 'utils/analytics';

const Link = styled.a`
  display: block;
  background: url(${mailImage});
  background-size: 64px 64px;
  width: 64px;
  height: 64px;
  filter: ${({ theme }) => (theme.colorized ? 'none' : 'grayscale(1)')};

  &:hover {
    filter: none;
  }
`;

export const MailLink = ({ href }: { href: string }) => {
  const onClick = () => {
    logEvent(AnalyticsEvent.MailClick);
  };

  return <Link href={href} onClick={onClick} aria-label="Mail" />;
};
