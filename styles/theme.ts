import { css, Theme } from '@emotion/react';

const colors = {};

interface Font {
  weight: 400 | 500 | 600 | 700 | 800;
  size: number;
  height: 'default' | 'long';
  spacing: 'default' | 'close';
}

interface TempFont extends Omit<Font, 'height'> {
  height: number;
}

const fontHeight = {
  default: 1.3,
  long: 1.5,
} as const;

function FONT({ weight, size, height, spacing }: Font | TempFont) {
  return css`
    font-family: Pretendard;
    font-weight: ${weight};
    font-size: ${size}rem;
    line-height: ${typeof height === 'number' ? height : fontHeight[height]};
  `;
}

const fonts = {};

const theme: Theme = {
  colors,
  fonts,
};
export default theme;
