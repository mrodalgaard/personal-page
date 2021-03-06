import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay';
import { faVolumeMute } from '@fortawesome/free-solid-svg-icons/faVolumeMute';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons/faVolumeUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'components/Link';
import React from 'react';
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

interface IProps {
  sound?: boolean;
  onSoundClick?: () => void;
}

const TypewriterButtons = ({
  sound = false,
  onSoundClick = () => {},
}: IProps) => {
  return (
    <TypewriterButtonsWrapper>
      <Link
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          event.stopPropagation();
          onSoundClick();
        }}
      >
        {sound ? (
          <FontAwesomeIcon icon={faVolumeUp} />
        ) : (
          <FontAwesomeIcon icon={faVolumeMute} />
        )}
      </Link>
      <PlayLink>
        <FontAwesomeIcon icon={faPlay} />
      </PlayLink>
    </TypewriterButtonsWrapper>
  );
};

export default TypewriterButtons;
