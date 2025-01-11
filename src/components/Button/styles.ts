import { StyleSheet } from 'react-native';
import { Palette, Variant } from './types';
import colors from '../../constants/colors';
import Typography from '../../resources/Typography';
import Radius from '../../resources/Radius';
import Spacing from '../../resources/Spacing';

const commonStyles = StyleSheet.create({
  primaryContainer: {
    backgroundColor: colors.newPrimaryColor,
  },
  primaryDisabledContainer: {
    backgroundColor: colors.gray30,
  },
  secondaryOutlinedContainer: {
    borderColor: colors.gray90,
    borderWidth: 1,
  },
  secondaryContainer: {
    backgroundColor: colors.gray90,
  },
  secondaryDisabledContainer: {
    backgroundColor: colors.gray30,
  },
  secondaryOutlinedDisabledContainer: {
    borderColor: colors.gray30,
  },
  largeContainer: {
    height: 56,
    width: '100%',
  },
  smallContainer: {
    alignSelf: 'baseline',
    height: 32,
  },
  iconContainer: {
    alignSelf: 'baseline',
    height: 40,
    width: 40,
  },
  primaryLabel: {
    color: colors.white,
  },
  secondaryLabel: {
    color: colors.white,
  },
  secondaryOutlinedDisabledLabel: {
    color: colors.gray30,
  },
  largeLabel: {
    ...Typography.label1,
  },
  smallLabel: {
    ...Typography.caption1,
  },
});

export const palette: Palette = {
  primary: {
    container: {
      ...commonStyles.primaryContainer,
      ...commonStyles.largeContainer,
    },
    label: {
      ...commonStyles.largeLabel,
      ...commonStyles.primaryLabel,
    },
  },
  primarySmall: {
    container: {
      ...commonStyles.primaryContainer,
      ...commonStyles.smallContainer,
    },
    label: {
      ...commonStyles.smallLabel,
      ...commonStyles.primaryLabel,
    },
  },
  primaryLargeWithIcon: {
    container: {
      ...commonStyles.primaryContainer,
      ...commonStyles.largeContainer,
      flexDirection: 'row',
    },
    label: {
      ...commonStyles.largeLabel,
      ...commonStyles.primaryLabel,
    },
  },
  primaryWithIcon: {
    container: {
      ...commonStyles.primaryContainer,
      ...commonStyles.smallContainer,
      flexDirection: 'row',
    },
    label: {
      ...commonStyles.smallLabel,
      ...commonStyles.primaryLabel,
    },
  },
  secondaryOutlined: {
    container: {
      ...commonStyles.secondaryOutlinedContainer,
      ...commonStyles.largeContainer,
    },
    label: {
      ...Typography.label1,
    },
  },
  secondaryOutlinedSmall: {
    container: {
      ...commonStyles.secondaryOutlinedContainer,
      ...commonStyles.smallContainer,
    },
    label: {
      ...commonStyles.smallLabel,
    },
  },
  secondaryOutlinedWithIcon: {
    container: {
      ...commonStyles.secondaryOutlinedContainer,
      ...commonStyles.smallContainer,
      flexDirection: 'row',
    },
    label: {
      ...commonStyles.smallLabel,
    },
  },
  secondaryOutlinedOnlyIcon: {
    container: {
      ...commonStyles.secondaryOutlinedContainer,
      ...commonStyles.iconContainer,
    },
    label: {
      ...commonStyles.smallLabel,
    },
  },
  secondarySmall: {
    container: {
      ...commonStyles.secondaryContainer,
      ...commonStyles.smallContainer,
    },
    label: {
      ...commonStyles.smallLabel,
      ...commonStyles.secondaryLabel,
    },
  },
  secondaryWithIcon: {
    container: {
      ...commonStyles.secondaryContainer,
      ...commonStyles.largeContainer,
      flexDirection: 'row',
    },
    label: {
      ...Typography.label1,
      ...commonStyles.secondaryLabel,
    },
  },
  secondaryLargeOutlinedWithIcon: {
    container: {
      ...commonStyles.largeContainer,
      ...commonStyles.secondaryOutlinedContainer,
      flexDirection: 'row',
    },
    label: {
      ...commonStyles.largeLabel,
    },
  },
  secondaryOnlyIcon: {
    container: {
      ...commonStyles.secondaryContainer,
      ...commonStyles.iconContainer,
    },
    label: {
      ...commonStyles.secondaryLabel,
    },
  },
  secondarySmallWithIcon: {
    container: {
      ...commonStyles.secondaryContainer,
      ...commonStyles.smallContainer,
      flexDirection: 'row',
    },
    label: {
      ...commonStyles.smallLabel,
      ...commonStyles.secondaryLabel,
    },
  },
};

export const paletteDisabled: Palette = {
  primary: {
    container: {
      backgroundColor: colors.gray30,
    },
    label: {},
  },
  primarySmall: {
    container: {
      backgroundColor: colors.gray30,
    },
    label: {},
  },
  primaryWithIcon: {
    container: {
      backgroundColor: colors.gray30,
    },
    label: {},
  },
  primaryLargeWithIcon: {
    container: {
      backgroundColor: colors.gray30,
    },
    label: {},
  },
  secondaryOutlined: {
    container: {
      borderColor: colors.gray30,
    },
    label: {
      color: colors.gray30,
    },
  },
  secondaryOutlinedSmall: {
    container: {
      borderColor: colors.gray30,
    },
    label: {
      ...commonStyles.smallLabel,
    },
  },
  secondaryOutlinedWithIcon: {
    container: {
      borderColor: colors.gray30,
    },
    label: {
      ...commonStyles.smallLabel,
    },
  },
  secondaryOutlinedOnlyIcon: {
    container: {
      borderColor: colors.gray30,
    },
    label: {},
  },
  secondarySmall: {
    container: {
      backgroundColor: colors.gray30,
    },
    label: {},
  },
  secondaryWithIcon: {
    container: {
      backgroundColor: colors.gray30,
    },
    label: {},
  },
  secondarySmallWithIcon: {
    container: {
      backgroundColor: colors.gray30,
    },
    label: {},
  },
  secondaryOnlyIcon: {
    container: {
      backgroundColor: colors.gray30,
    },
    label: {},
  },
  secondaryLargeOutlinedWithIcon: {
    container: {
      backgroundColor: colors.gray3,
    },
    label: {
      ...commonStyles.largeLabel,
    },
  },
};

const styles = (variant: Variant, _colors: Colors, isEnabled: boolean) =>
  StyleSheet.create({
    container: {
      ...palette[variant].container,
      backgroundColor:
        variant === Variant.PRIMARY ||
        variant === Variant.PRIMARY_SMALL ||
        variant === Variant.PRIMARY_WITH_ICON ||
        variant === Variant.PRIMARY_LARGE_WITH_ICON
          ? _colors.newPrimaryColor
          : palette[variant].container.backgroundColor,
      ...(!isEnabled ? paletteDisabled[variant].container : {}),
      alignItems: 'center',
      borderRadius: Radius.s,
      justifyContent: 'center',
      paddingHorizontal: Spacing.m,
    },
    label: {
      ...palette[variant].label,
      ...(!isEnabled ? paletteDisabled[variant].label : {}),
    },
  });

export default styles;
