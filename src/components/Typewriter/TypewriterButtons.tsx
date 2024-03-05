import { Icon } from 'components/Icon';
import { Link } from 'components/Link';
import { MouseEvent } from 'react';
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

export const TypewriterButtons = ({
  sound = false,
  onSoundClick = () => {},
}: {
  sound?: boolean;
  onSoundClick?: () => void;
}) => {
  return (
    <TypewriterButtonsWrapper>
      <Link
        onClick={(event: MouseEvent<HTMLElement>) => {
          event.stopPropagation();
          onSoundClick();
        }}
        ariaLabel={sound ? 'Sound' : 'Mute'}
      >
        {sound ? <Icon type="sound" /> : <Icon type="mute" />}
      </Link>
      <PlayLink ariaLabel="Play">
        <Icon type="play" />
      </PlayLink>
    </TypewriterButtonsWrapper>
  );
};
