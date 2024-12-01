import { z } from 'zod';

export enum Mode {
  system = 'system',
  light = 'light',
  dark = 'dark',
}

export const modeZodType = z.enum([Mode.system, Mode.light, Mode.dark]);
