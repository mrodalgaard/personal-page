import Paper from 'components/Paper';
import Typewriter from 'components/Typewriter';
import { TYPEWRITER_DELAY } from 'utils/constants';

export default function Letter({ children, animate = true }: { children: React.ReactNode; animate?: boolean }) {
  return (
    <Paper>
      <Typewriter delay={animate ? TYPEWRITER_DELAY : 0}>{children}</Typewriter>
    </Paper>
  );
}
