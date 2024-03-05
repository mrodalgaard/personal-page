import { Draggable, DraggableIcon } from 'components/Draggable';
import { Paper } from 'components/Paper';
import { Typewriter } from 'components/Typewriter';

export const Letter = ({ children, animate = true }: { children: React.ReactNode; animate?: boolean }) => {
  return (
    <Draggable>
      <Paper>
        <Typewriter delay={animate ? undefined : 0}>{children}</Typewriter>
      </Paper>
      <DraggableIcon position="top-right" />
    </Draggable>
  );
};
