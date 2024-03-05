import styled from 'styled-components';

const StyledPaper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.background};
  background-image: repeating-linear-gradient(
    140deg,
    rgba(133, 133, 133, 0.1),
    rgba(133, 133, 133, 0.1) 1px,
    transparent 0px,
    transparent 2px
  );
  color: ${({ theme }) => theme.colors.text};
  border-radius: 1px;
  margin-bottom: 20px;
  padding: 20px;

  cursor: ${({
      theme,
    }) => `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='${encodeURIComponent(
      theme.colors.primary
    )}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 19l7-7 3 3-7 7-3-3z'%3E%3C/path%3E%3Cpath d='M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z'%3E%3C/path%3E%3Cpath d='M2 2l7.586 7.586'%3E%3C/path%3E%3Ccircle cx='11' cy='11' r='2'%3E%3C/circle%3E%3C/svg%3E%0A")
    `},
    auto;

  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.5s ease;

  &:hover {
    box-shadow: 0 9px 12px 1px rgba(0, 0, 0, 0.14), 0 3px 16px 2px rgba(0, 0, 0, 0.12),
      0 5px 6px -3px rgba(0, 0, 0, 0.2);
  }

  p {
    line-height: 1.3rem;
    margin-block-end: 1rem;
  }
`;

export default function Paper({ children, className }: { children: React.ReactNode; className?: string }) {
  return <StyledPaper className={className}>{children}</StyledPaper>;
}
