import Link from 'components/Link';
import { MouseEvent } from 'react';
import { Play, Volume, Volume1 } from 'react-feather';
import styled from 'styled-components';

const TypewriterButtonsWrapper = styled.div`
  float: right;
  display: flex;
`;

const PlayLink = styled(Link)`
  font-size: 12px;
  padding-left: 6px;

  animation: blink 0.5s linear infinite alternate;

  @keyframes blink {
    0% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }
`;

const FilledPlayIcon = styled(Play)`
  fill: currentColor;
`;

const FilledSoundIcon = styled(Volume)`
  fill: currentColor;
`;

const FilledMuteIcon = styled(Volume1)`
  fill: currentColor;
`;

export default function TypewriterButtons({
  sound = false,
  onSoundClick = () => {},
}: {
  sound?: boolean;
  onSoundClick?: () => void;
}) {
  return (
    <TypewriterButtonsWrapper>
      <Link
        onClick={(event: MouseEvent<HTMLElement>) => {
          event.stopPropagation();
          onSoundClick();
        }}
        ariaLabel={sound ? 'Sound' : 'Mute'}
      >
        {sound ? <FilledMuteIcon /> : <FilledSoundIcon />}
      </Link>
      <PlayLink ariaLabel="Play">
        <FilledPlayIcon />
      </PlayLink>
    </TypewriterButtonsWrapper>
  );
}
