import { MouseEvent, ReactNode } from 'react';
import styled from 'styled-components';
import { AnalyticsEvent, logEvent } from 'utils/analytics';

const StyledLink = styled.a`
  color: ${({ color, theme }) => (color ? color : theme.primary)};
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.5s ease;

  &:hover {
    color: ${({ theme }) => theme.secondary};
  }
`;

export default function Link({
  children,
  className,
  color,
  href,
  ariaLabel,
  analyticsEvent,
  onClick,
}: {
  children: ReactNode;
  className?: any;
  color?: string;
  href?: string;
  ariaLabel?: string;
  analyticsEvent?: AnalyticsEvent;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}) {
  const localOnClick = (event: MouseEvent<HTMLElement>) => {
    analyticsEvent && logEvent(analyticsEvent);
    onClick && onClick(event);
  };

  return (
    <StyledLink className={className} color={color} href={href} aria-label={ariaLabel} onClick={localOnClick}>
      {children}
    </StyledLink>
  );
}
