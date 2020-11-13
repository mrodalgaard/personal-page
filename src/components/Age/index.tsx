import React from 'react';
import styled from 'styled-components';
import useAge from './useAge';

const AgeSpan = styled.span`
  width: 20px;
  display: inline-block;
`;

interface IProps {
  birthday: string;
  updateInterval: number;
}

const Age = (props: IProps) => {
  const age = useAge(props);

  return <AgeSpan>{age}</AgeSpan>;
};

export default Age;
