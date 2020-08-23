import { theme } from '@chakra-ui/core';

import { ICONS as customIcons } from '../constants';

const { colors, icons } = theme;
const { facebook, green, purple } = colors;

export default {
  ...theme,
  colors: {
    ...colors,
    primary: {
      light: facebook,
      dark: purple,
    },
    secondary: {
      light: green,
      dark: green,
    },
    tertiary: {
      light: '#999',
      dark: '#FFF',
    },
    text: {
      light: '#000',
      dark: '#FFF',
    },
    background: {
      light: '#FFF',
      dark: '#0D0D0D',
    },
  },
  breakpoints: ['30em', '48em', '62em', '80em'],
  icons: {
    ...icons,
    ...customIcons,
  },
};
