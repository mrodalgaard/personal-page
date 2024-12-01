import { SiGithub, SiLinkedin, SiX } from '@icons-pack/react-simple-icons';
import { ArrowDownLeft, Moon, Play, Sun, Sunset, Volume1, VolumeX } from 'react-feather';

enum IconType {
  linkedIn = 'linkedIn',
  github = 'github',
  x = 'x',
  play = 'play',
  sound = 'sound',
  mute = 'mute',
  light = 'light',
  dark = 'dark',
  system = 'system',
  move = 'move',
}

export const Icon = ({ type, className }: { type: keyof typeof IconType; className?: string }) => {
  switch (type as IconType) {
    case IconType.linkedIn:
      return <SiLinkedin className={className} />;
    case IconType.github:
      return <SiGithub className={className} />;
    case IconType.x:
      return <SiX className={className} />;
    case IconType.play:
      return <Play className={className} />;
    case IconType.sound:
      return <Volume1 className={className} />;
    case IconType.mute:
      return <VolumeX className={className} />;
    case IconType.light:
      return <Sun className={className} />;
    case IconType.dark:
      return <Moon className={className} />;
    case IconType.system:
      return <Sunset className={className} />;
    case IconType.move:
      return <ArrowDownLeft className={className} />;
  }
};
