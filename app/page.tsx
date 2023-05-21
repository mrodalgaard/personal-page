'use client';

import styled from 'styled-components';
import Background from './components/Background';
import Envelope from './components/Envelope';
import Letter from './components/Letter';
import Providers from './providers';

const Content = styled.main`
  margin: 20px;

  @media (min-width: 550px) {
    float: right;
    width: 400px;
  }

  @media (min-width: 1800px) {
    margin-right: 15%;
  }
`;

// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   console.log(metric);
//   logWebVitals(metric);
// }

export default function Page() {
  return (
    <Providers>
      <Background />
      <Content>
        <Envelope />
        <Letter />
      </Content>
    </Providers>
  );
}
