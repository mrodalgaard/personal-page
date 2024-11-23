import mailImage from 'assets/img/mail.png';
import { Link } from 'components/Link';
import styled from 'styled-components';
import { AnalyticsEvent } from 'utils/analytics';

const StyledLink = styled(Link)`
  display: block;
  background: url(${mailImage});
  background-size: ${({ theme }) => theme.sizes.mail} ${({ theme }) => theme.sizes.mail};
  width: ${({ theme }) => theme.sizes.mail};
  height: ${({ theme }) => theme.sizes.mail};
  filter: ${({ theme }) => (theme.colorized ? 'none' : 'grayscale(1)')};

  &:hover {
    filter: none;
  }
`;

export const MailLink = ({ href }: { href: string }) => {
  return <StyledLink href={href} analyticsEvent={AnalyticsEvent.MailClick} ariaLabel="Mail" />;
};
