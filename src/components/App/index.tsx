import * as React from 'react';
import styled from 'styled-components';
import Background from '../Background';
import Envelope from '../Envelope';
import Letter from '../Letter';
import AppProvider from './AppProvider';

const Content = styled.div`
  margin: 20px;

  @media (min-width: 550px) {
    float: right;
    width: 400px;
  }

  @media (min-width: 1800px) {
    margin-right: 15%;
  }
`;

const App = () => {
  return (
    <AppProvider>
      <Background />
      <Content>
        <Envelope />
        <Letter />
      </Content>
    </AppProvider>
  );
};

export default App;
