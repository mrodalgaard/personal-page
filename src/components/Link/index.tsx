import { MouseEvent } from 'react';
import styled from 'styled-components';
import { AnalyticsEvent, logEvent } from 'utils/analytics';

const StyledLink = styled.a`
  color: ${({ theme }) => (theme.colorized ? theme.colors.secondary : theme.colors.text)};
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.5s ease, transform 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  &:active {
    transform: scale(0.85);
  }
`;

export const Link = ({
  children,
  className,
  href,
  ariaLabel,
  analyticsEvent,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  ariaLabel?: string;
  analyticsEvent?: AnalyticsEvent;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}) => {
  const localOnClick = (event: MouseEvent<HTMLElement>) => {
    analyticsEvent && logEvent(analyticsEvent);
    onClick && onClick(event);
  };

  return (
    <StyledLink className={className} href={href} aria-label={ariaLabel} onClick={localOnClick}>
      {children}
    </StyledLink>
  );
};
