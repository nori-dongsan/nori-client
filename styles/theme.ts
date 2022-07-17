import { css, Theme } from '@emotion/react';

const colors = {
  mainGreen: '#1DB981',
  mainDarkgreen: '#1D8669',
  subYellow: '#FFE766',
  orange: '#FF9D55',
  blue: '#4484FF',
  lightGreen: '#F5FFF0',
  white: '#FFFFFF',
  white_opacity_75: 'rgba(255, 255, 255, 0.75)',
  white_opacity_40: 'rgba(255, 255, 255, 0.4)',
  white_opacity_14: 'rgba(255, 255, 255, 0.14)',

  gray001: '#FCFCFC',
  gray002: '#F8F8F8',
  gray003: '#E8E8E8',
  gray004: '#E2E2E2',
  gray005: '#D9D9D9',
  gray006: '#A9A9A9',
  gray007: '#9D9D9D',
  gray008: '#787878',
  gray009: '#636363',
  black: '#1F2220',
};

interface Font {
  weight: 400 | 500 | 600 | 700 | 800;
  size: number;
  height: number;
  spacing: 0;
}

function FONT({ weight, size, height, spacing }: Font) {
  return css`
    font-family: Pretendard;
    font-weight: ${weight};
    font-size: ${size}rem;
    line-height: ${height}rem;
    spacing: ${spacing}%;
  `;
}

const fonts = {
  t1_28_medium_150: FONT({ weight: 500, size: 2.8, height: 4.2, spacing: 0 }),
  t2_26_semibold_150: FONT({ weight: 600, size: 2.6, height: 3.9, spacing: 0 }),
  t3_19_bold_140: FONT({ weight: 700, size: 1.9, height: 2.66, spacing: 0 }),
  t3_19_medium_130: FONT({ weight: 500, size: 1.8, height: 2.47, spacing: 0 }),
  t4_18_semibold_150: FONT({ weight: 600, size: 1.8, height: 2.7, spacing: 0 }),
  t4_18_regular_150: FONT({ weight: 400, size: 1.8, height: 2.7, spacing: 0 }),
  t5_27_regular_130: FONT({ weight: 400, size: 2.7, height: 3.51, spacing: 0 }),
  b1_20_bold_140: FONT({ weight: 700, size: 2, height: 2.8, spacing: 0 }),
  b2_18_bold_140: FONT({ weight: 700, size: 1.8, height: 2.52, spacing: 0 }),
  b2_18_medium_130: FONT({ weight: 500, size: 1.8, height: 2.34, spacing: 0 }),
  b2_18_regular_130: FONT({ weight: 400, size: 1.8, height: 2.34, spacing: 0 }),
  b3_16_bold_140: FONT({ weight: 700, size: 1.6, height: 2.24, spacing: 0 }),
  b3_16_semibold_140: FONT({
    weight: 600,
    size: 1.6,
    height: 2.24,
    spacing: 0,
  }),
  b3_16_medium_140: FONT({ weight: 500, size: 1.6, height: 2.24, spacing: 0 }),
  b4_15_semibold_146: FONT({
    weight: 600,
    size: 1.5,
    height: 2.19,
    spacing: 0,
  }),
  b5_14_semibold_140: FONT({
    weight: 600,
    size: 1.4,
    height: 1.96,
    spacing: 0,
  }),
  b5_14_medium_140: FONT({ weight: 500, size: 1.4, height: 1.96, spacing: 0 }),
  b6_13_medium_120: FONT({ weight: 500, size: 1.3, height: 1.56, spacing: 0 }),
  b7_12_bold_120: FONT({ weight: 700, size: 1.2, height: 1.44, spacing: 0 }),
  b7_12_medium_140: FONT({ weight: 500, size: 1.2, height: 1.68, spacing: 0 }),
  b7_12_regular_120: FONT({ weight: 400, size: 1.2, height: 1.44, spacing: 0 }),
  b8_20_regular_180: FONT({ weight: 400, size: 2, height: 3.6, spacing: 0 }),
};

const theme: Theme = {
  colors,
  fonts,
};
export default theme;
