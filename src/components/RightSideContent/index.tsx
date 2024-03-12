import { PHONE_SIZE_PX } from 'contexts/ThemeContext';
import styled from 'styled-components';

const Content = styled.main`
  @media (min-width: ${PHONE_SIZE_PX}px) {
    max-width: 400px;
    margin-left: auto;
    margin-right: 0;
  }
`;

const ContentWrapper = styled.div`
  min-width: 350px;
  max-width: 1800px;
  margin: 0 auto;
  padding: 20px;
`;

export const RightSideContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <ContentWrapper>
      <Content>{children}</Content>
    </ContentWrapper>
  );
};
