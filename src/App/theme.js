import { tint } from 'polished';

const basicColors = {
  black: '#000',
  white: '#fff',
  primary: '#EF3B10',
  secondary: '#82C7F4',
};

const theme = {
  colors: {
    ...basicColors,
    grayDark: tint(0.8, basicColors.black),
  },
};

export default theme;
