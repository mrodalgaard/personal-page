import { SiGithub, SiLinkedin, SiX } from '@icons-pack/react-simple-icons';
import { Moon, Play, Sun, Volume, Volume1 } from 'react-feather';

enum IconType {
  linkedIn = 'linkedIn',
  github = 'github',
  x = 'x',

  play = 'play',
  sound = 'sound',
  mute = 'mute',

  light = 'light',
  dark = 'dark',
}

export const Icon = ({ type }: { type: keyof typeof IconType }) => {
  switch (type) {
    case IconType.linkedIn:
      return <SiLinkedin />;
    case IconType.github:
      return <SiGithub />;
    case IconType.x:
      return <SiX />;
    case IconType.play:
      return <Play />;
    case IconType.sound:
      return <Volume1 />;
    case IconType.mute:
      return <Volume />;
    case IconType.light:
      return <Sun />;
    case IconType.dark:
      return <Moon />;
    default:
      return null;
  }
};
