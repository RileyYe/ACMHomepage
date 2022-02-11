import type { ThemeUIStyleObject } from 'theme-ui';
import { mRV } from './util/theme';

export const title = (
  <span>
    Soochow University
    <br />
    ACM Homepage
  </span>
);

export const footer = <span>This is footer.</span>;

interface Colors {
  [key: string]: { [key: number]: string } & { DEFAULT: string };
}

export const colors: Colors = {
  green: {
    DEFAULT: '#9EC5AC',
    100: '#DAE6DE',
    200: '#D4E6DA',
    300: '#D7EFE0',
    400: '#B7D8C3',
    500: '#9EC5AC',
    600: '#78A288',
    700: '#5A8068',
    800: '#446953',
    900: '#32533F',
  },
  gray: {
    DEFAULT: '#909799',
    100: '#F9FEFF',
    200: '#DDE2E3',
    300: '#C4CBCC',
    400: '#A9B1B3',
    500: '#909799',
    600: '#747B7D',
    700: '#5D6566',
    800: '#43494B',
    900: '#2E3233',
  },
};

export const utilMainPart: ThemeUIStyleObject = {
  mx: 'auto',
  px: '1rem',
  width: mRV({
    _: '100%',
    lg: `${(100 * 10) / 12}%`,
    xl: `${(100 * 8) / 12}%`,
  }),
};
