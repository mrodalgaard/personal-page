import { Icon } from 'components/Icon';
import styled from 'styled-components';
import { DRAGGABLE_HANDLE } from './constants';

type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

const StyledIcon = styled(Icon)<{ $position: Position }>`
  position: absolute;
  cursor: move;
  opacity: 0.2;

  ${({ $position }) => {
    switch ($position) {
      case 'top-left':
        return `
          top: 0;
          left: 0;
          rotate: 90deg;
        `;
      case 'top-right':
        return `
          top: 0;
          right: 0;
          rotate: 180deg;
        `;
      case 'bottom-left':
        return `
          bottom: 0;
          left: 0;
        `;
      case 'bottom-right':
        return `
          bottom: 0;
          right: 0;
          rotate: 270deg;
        `;
    }
  }};
`;

export const DraggableIcon = ({ position, className }: { position: Position; className?: string }) => {
  return <StyledIcon type="move" className={`${className} ${DRAGGABLE_HANDLE}`} $position={position} />;
};
