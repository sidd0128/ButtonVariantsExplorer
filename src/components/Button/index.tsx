import React, { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import { Variant } from './types'; // Assuming Variant is an enum or a union type
import Spacing from '../../resources/Spacing';
import IconSize from '../../resources/IconSize';
import { CustomText } from '../CustomText';
import colors from '../../constants/colors';


interface ButtonCommonProps {
  testId?: string;
  isEnabled?: boolean;
  onPress: () => void;
}

interface ButtonWithLabelProps {
  label: string;
}

interface ButtonWithIconProps {
  icon: string;
}

export type ButtonProps = {
  variant: Variant; // You can use just Variant here to accept any value from the Variant enum
} & ButtonCommonProps & (ButtonWithLabelProps | ButtonWithIconProps);

const renderIcon = (props: ButtonProps, colors: Colors) => {
  if (
    'icon' in props &&
    [
      Variant.PRIMARY_WITH_ICON,
      Variant.PRIMARY_LARGE_WITH_ICON,
      Variant.SECONDARY_OUTLINED_WITH_ICON,
      Variant.SECONDARY_WITH_ICON,
      Variant.SECONDARY_SMALL_WITH_ICON,
      Variant.SECONDARY_ONLY_ICON,
      Variant.SECONDARY_LARGE_OUTLINED_WITH_ICON,
      Variant.SECONDARY_OUTLINED_ONLY_ICON,
    ].includes(props.variant)
  ) {
    return (
      <View style={{ marginEnd: getIconMarginEnd(props) }}>
        <Icon
          name={props.icon}
          size={getIconSize(props)}
          color={styles(props.variant, colors, props.isEnabled ?? true).label.color}
        />
      </View>
    );
  }
  return null;
};

const getIconMarginEnd = (props: ButtonProps) =>
  [
    Variant.PRIMARY_WITH_ICON,
    Variant.PRIMARY_LARGE_WITH_ICON,
    Variant.SECONDARY_WITH_ICON,
    Variant.SECONDARY_LARGE_OUTLINED_WITH_ICON,
    Variant.SECONDARY_OUTLINED_WITH_ICON,
  ].includes(props.variant)
    ? Spacing.s
    : 0;

const getIconSize = (props: ButtonProps) =>
  [
    Variant.PRIMARY_WITH_ICON,
    Variant.SECONDARY_OUTLINED_WITH_ICON,
    Variant.SECONDARY_SMALL_WITH_ICON,
  ].includes(props.variant)
    ? IconSize.s
    : IconSize.m;

const renderLabel = (props: ButtonProps, colors: Colors) => {
  if (
    'label' in props &&
    ![
      Variant.SECONDARY_OUTLINED_ONLY_ICON,
      Variant.SECONDARY_ONLY_ICON,
    ].includes(props.variant)
  ) {
    return (
      <CustomText style={styles(props.variant, colors, props.isEnabled ?? true).label}>
        {props.label}
      </CustomText>
    );
  }
  return null;
};

const Button: FC<ButtonProps> = (props) => {
  const _colors = colors;

  return (
    <TouchableOpacity
      accessibilityLabel={props.testId}
      accessible={true}
      testID={props.testId}
      style={styles(props.variant, _colors, props.isEnabled ?? true).container}
      onPress={props.onPress}
      disabled={props.isEnabled !== undefined ? !props.isEnabled : false}
    >
      {renderIcon(props, _colors)}
      {renderLabel(props, _colors)}
    </TouchableOpacity>
  );
};

export * from './types';
export default Button;
