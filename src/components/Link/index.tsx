import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: ${({ color, theme }) => (color ? color : theme.primary)};
  transition: color 0.5s ease;

  &:hover {
    color: ${({ theme }) => theme.secondary};
  }
`;

interface IProps {
  children: React.ReactNode;
  className?: any;
  color?: string;
  href: string;
  ariaLabel?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const Link = ({
  children,
  className,
  color,
  href,
  onClick,
  ariaLabel,
}: IProps) => {
  return (
    <StyledLink
      className={className}
      color={color}
      href={href}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </StyledLink>
  );
};

export default Link;
