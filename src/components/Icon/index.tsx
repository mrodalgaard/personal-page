import { CSSProperties } from 'react';
import { GitHub, Linkedin, Moon, Play, Sun, Twitter, Volume, Volume1 } from 'react-feather';

enum IconType {
  linkedIn = 'linkedIn',
  github = 'github',
  twitter = 'twitter',

  play = 'play',
  sound = 'sound',
  mute = 'mute',

  light = 'light',
  dark = 'dark',
}

export default function Icon({ type }: { type: keyof typeof IconType }) {
  const style: CSSProperties = { fill: 'currentcolor' };

  switch (type) {
    case IconType.linkedIn:
      return <Linkedin style={style} />;
    case IconType.github:
      return <GitHub style={style} />;
    case IconType.twitter:
      return <Twitter style={style} />;
    case IconType.play:
      return <Play style={style} />;
    case IconType.sound:
      return <Volume1 style={style} />;
    case IconType.mute:
      return <Volume style={style} />;
    case IconType.light:
      return <Sun style={style} />;
    case IconType.dark:
      return <Moon style={style} />;
    default:
      return <></>;
  }
}
