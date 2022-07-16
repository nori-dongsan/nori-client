import { SerializedStyles } from '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      mainGreen: string;
      mainDarkgreen: string;
      subYellow: string;
      orange: string;
      blue: string;
      lightGreen: string;
      white: string;
      white_opacity_75: string;
      white_opacity_40: string;
      white_opacity_14: string;
      gray001: string;
      gray002: string;
      gray003: string;
      gray004: string;
      gray005: string;
      gray006: string;
      gray007: string;
      gray008: string;
      gray009: string;
      black: string;
    };
    fonts: {
      t1_28_medium_150: SerializedStyles;
      t2_26_semibold_150: SerializedStyles;
      t3_19_bold_140: SerializedStyles;
      t3_19_medium_130: SerializedStyles;
      t4_18_semibold_150: SerializedStyles;
      t4_18_regular_150: SerializedStyles;
      t6_17_regular_140: SerializedStyles;
      b1_20_bold_140: SerializedStyles;
      b2_18_bold_140: SerializedStyles;
      b2_18_medium_130: SerializedStyles;
      b2_18_regular_130: SerializedStyles;
      b3_16_bold_140: SerializedStyles;
      b3_16_semibold_140: SerializedStyles;
      b3_16_medium_140: SerializedStyles;
      b4_15_semibold_146: SerializedStyles;
      b5_14_semibold_140: SerializedStyles;
      b5_14_medium_140: SerializedStyles;
      b6_13_medium_120: SerializedStyles;
      b7_12_bold_120: SerializedStyles;
      b7_12_medium_140: SerializedStyles;
      b7_12_regular_120: SerializedStyles;
      b9_24_medium_150: SerializedStyles;
      b10_22_regular_150: SerializedStyles;
    };
  }
}
