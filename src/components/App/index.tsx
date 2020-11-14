import Background from 'components/Background';
import Envelope from 'components/Envelope';
import Letter from 'components/Letter';
import React from 'react';
import styled from 'styled-components';
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
