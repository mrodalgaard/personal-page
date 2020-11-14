import noteImg from 'assets/img/note.jpg';
import styled from 'styled-components';

export const Paper = styled.div`
  position: relative;
  background: url(${noteImg});
  border-radius: 1px;
  margin-bottom: 20px;
  padding: 20px;

  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.5s ease;

  &:hover {
    box-shadow: 0 9px 12px 1px rgba(0, 0, 0, 0.14),
      0 3px 16px 2px rgba(0, 0, 0, 0.12), 0 5px 6px -3px rgba(0, 0, 0, 0.2);
  }
`;
