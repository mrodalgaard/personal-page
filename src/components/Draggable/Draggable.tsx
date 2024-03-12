import { ReactNode, useRef } from 'react';
import ReactDraggable from 'react-draggable';
import { DRAGGABLE_HANDLE } from './constants';

export const Draggable = ({ children }: { children: ReactNode }) => {
  const nodeRef = useRef(null);

  return (
    <ReactDraggable nodeRef={nodeRef} handle={`.${DRAGGABLE_HANDLE}`}>
      <div ref={nodeRef}>{children}</div>
    </ReactDraggable>
  );
};
