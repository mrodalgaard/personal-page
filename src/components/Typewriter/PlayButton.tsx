import React from 'react';
import styled from 'styled-components';

const StyledPlayButton = styled.i`
  float: right;
  cursor: pointer;
  transition: color 0.5s ease;

  &:hover {
    color: ${({ theme }) => theme.secondary};
  }

  animation: cursor 0.5s linear infinite alternate;

  @keyframes cursor {
    0% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }

  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 6px;
    height: 10px;
  }
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 0;
    height: 10px;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 6px solid;
  }
`;

interface IProps {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const PlayButton = ({ onClick }: IProps) => {
  return <StyledPlayButton onClick={onClick}></StyledPlayButton>;
};

export default PlayButton;
