import React, { FC } from 'react';
import { Text, TextProps } from 'react-native';

export const CustomText: FC<TextProps> = ({ children, ...props }) => {
  return (
    <Text allowFontScaling={false} {...props}>
      {children}
    </Text>
  );
};
