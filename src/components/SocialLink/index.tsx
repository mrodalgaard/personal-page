import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import styled from 'styled-components';
import analytics, { LogEvent } from '../../util/analytics';
import Link from '../Link';

const StyledLink = styled(Link)`
  padding: 2px;
`;

interface IProps {
  color?: string;
  href: string;
  icon: IconProp;
  logEvent?: LogEvent;
  ariaLabel: string;
}

const SocialLink = ({ color, href, icon, logEvent, ariaLabel }: IProps) => {
  const onClick = () => {
    logEvent && analytics.logEvent(logEvent);
  };

  return (
    <StyledLink
      href={href}
      color={color}
      onClick={onClick}
      ariaLabel={ariaLabel}
    >
      <FontAwesomeIcon icon={icon} />
    </StyledLink>
  );
};

export default SocialLink;
