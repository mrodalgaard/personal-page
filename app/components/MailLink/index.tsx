import mailImage from 'assets/img/mail.png';
import styled from 'styled-components';
import { AnalyticsEvent, logEvent } from 'utils/analytics';

const Link = styled.a`
  background: url(${mailImage.src});
  background-size: 64px 64px;
  width: 64px;
  height: 64px;
  filter: ${({ color, theme }) => (color === theme.primary ? 'grayscale(1)' : 'none')};

  &:hover {
    filter: none;
  }
`;

export default function MailLink({ color, href }: { color?: string; href: string }) {
  const onClick = () => {
    logEvent(AnalyticsEvent.MailClick);
  };

  return <Link color={color} href={href} onClick={onClick} aria-label="Mail" />;
}
