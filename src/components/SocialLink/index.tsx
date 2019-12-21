import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import styled from "styled-components";
import Link from "../Link";

const StyledLink = styled(Link)`
  padding: 2px;
`;

interface IProps {
  color?: string;
  href: string;
  icon: IconProp;
}

const SocialLink = (props: IProps) => {
  const { color, href, icon } = props;

  return (
    <StyledLink href={href} color={color}>
      <FontAwesomeIcon icon={icon} />
    </StyledLink>
  );
};

export default SocialLink;
