import styled from 'styled-components';

const ContentWrapper = styled.div`
  min-width: 350px;
  max-width: 1800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(2)};
`;

const Content = styled.main`
  ${({ theme }) => theme.mediaQueries.sm} {
    max-width: 400px;
    margin-left: auto;
    margin-right: 0;
  }
`;

export const RightSideContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <ContentWrapper>
      <Content>{children}</Content>
    </ContentWrapper>
  );
};
