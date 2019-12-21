import * as React from 'react';
import styled from 'styled-components';
import Background from '../Background';
import Envelope from '../Envelope';
import Letter from '../Letter';
import AppProvider from './AppProvider';

const Content = styled.div`
  margin: 20px;

  @media (min-width: 500px) {
    float: right;
    width: 400px;
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
