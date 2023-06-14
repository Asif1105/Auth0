
import { Theme } from '@mui/material/styles';

const json = require('@shop/dls/src/theme');

const { dls: { colors } } = json;
export enum Color {
  aaBlue = colors.aaBlue,
  caBlue = colors.caBlue,
  black = colors.black,
  grey1 = colors.grey1,
  grey2 = colors.grey2,
  grey3 = colors.grey3,
  grey4 = colors.grey4,
  grey5 = colors.grey5,
  grey6 = colors.grey6,
  grey8 = colors.grey8,
  white = colors.white,
  arcticBlue = colors.arcticBlue,
  darkBlue = colors.darkBlue,
  darkTeal = colors.darkTeal,
  lightBlue = colors.lightBlue,
  lightTeal = colors.lightTeal,
  paleBlue = colors.paleBlue,
  skyBlue = colors.skyBlue,
  caGreen = colors.caGreen,
  caYellow = colors.caYellow,
  caRed = colors.caRed,
  transparent = colors.transparent
};

export type DLSBreakPoints = {
  mobile: number;
  tablet: number;
  desktop: number
};
  
export type DLSColors = {
  aaBlue: Color;
  caBlue: Color;
  black: Color;
  grey1: Color;
  grey2: Color;
  grey3: Color;
  grey4: Color;
  grey5: Color;
  grey6: Color;
  white: Color;
  arcticBlue: Color;
  darkBlue: Color;
  darkTeal: Color;
  lightBlue: Color;
  lightTeal: Color;
  paleBlue: Color;
  skyBlue: Color;
  caGreen: Color;
  caYellow: Color;
  caRed: Color;
};

export type DLSLayout = {
  layout: {
    breakpoints: DLSBreakPoints;
  }
};

export type DLSAlt = {
  sizes: unknown;
  components: unknown;
};

export type DLS = {
  colors: DLSColors;
  layout: DLSLayout;
  alt: DLSAlt
};
  
export interface DLSTheme extends Theme {
  dls: DLS;
};
