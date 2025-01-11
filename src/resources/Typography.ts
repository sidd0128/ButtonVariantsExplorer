import colors from '../constants/colors';
import { TextStyle } from 'react-native';

type Tags =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'body'
  | 'label1'
  | 'label2'
  | 'callout'
  | 'caption1'
  | 'caption2'
  | 'link'
  | 'bottomNavActive'
  | 'bottomNavInactive';

export type TypographyStyles = Required<
  Pick<TextStyle, 'color'  | 'fontSize' | 'letterSpacing' | 'lineHeight'>
>;

type TTypography = {
  [tag in Tags]: TypographyStyles;
};

export const fontSize = {
  xxs: 10,
  xs: 12,
  s: 14,
  m: 16,
  l: 18,
  xl: 24,
  xxl: 32,
};

const Typography: TTypography = {
  h1: {
    color: colors.gray1,
    fontSize: fontSize.xxl,
    letterSpacing: 0.23,
    lineHeight: 40.16,
  },
  h2: {
    color: colors.gray1,
    fontSize: fontSize.xl,
    letterSpacing: 0.17,
    lineHeight: 32,
  },
  h3: {
    color: colors.gray1,
    fontSize: fontSize.l,
    letterSpacing: 0.13,
    lineHeight: 22.59,
  },
  body: {
    color: colors.gray1,
    fontSize: fontSize.m,
    letterSpacing: 0.11,
    lineHeight: 24,
  },
  label1: {
    color: colors.gray1,
    fontSize: fontSize.m,
    letterSpacing: 0.11,
    lineHeight: 24,
  },
  label2: {
    color: colors.gray1,
    fontSize: fontSize.s,
    letterSpacing: 0.1,
    lineHeight: 17.57,
  },
  callout: {
    color: colors.gray1,
    fontSize: fontSize.s,
    letterSpacing: 0.1,
    lineHeight: 18,
  },
  caption1: {
    color: colors.gray1,
    fontSize: fontSize.xs,
    letterSpacing: 0.09,
    lineHeight: 15.06,
  },
  caption2: {
    color: colors.gray1,
    fontSize: fontSize.xs,
    letterSpacing: 0.09,
    lineHeight: 15,
  },
  link: {
    color: colors.gray1,
    fontSize: fontSize.s,
    letterSpacing: 0.09,
    lineHeight: 15.06,
  },
  bottomNavActive: {
    color: colors.gray1,
    fontSize: fontSize.xxs,
    letterSpacing: 0.086,
    lineHeight: 13,
  },
  bottomNavInactive: {
    color: colors.gray2,
    fontSize: fontSize.xxs,
    letterSpacing: 0.086,
    lineHeight: 13,
  },
};

export default Typography;
