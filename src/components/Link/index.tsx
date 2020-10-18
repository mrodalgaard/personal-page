import * as React from 'react';
import styled from 'styled-components';
import { AppColors } from '../../util/theme';

const StyledLink = styled.a`
  color: ${(props) => (props.color ? props.color : AppColors.primary)};
  text-decoration: none;
  font-weight: bold;
  transition: color 0.5s ease;

  &:hover {
    color: ${AppColors.secondary};
  }
`;

interface IProps {
  children: React.ReactNode;
  className?: any;
  color?: string;
  href: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const Link = (props: IProps) => {
  const { children, className, color, href, onClick } = props;

  return (
    <StyledLink
      className={className}
      color={color}
      href={href}
      onClick={onClick}
    >
      {children}
    </StyledLink>
  );
};

export default Link;
