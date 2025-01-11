import { ViewStyle } from 'react-native';
import { TypographyStyles } from '../../resources/Typography';

export enum Variant {
  PRIMARY = 'primary',
  PRIMARY_SMALL = 'primarySmall',
  PRIMARY_WITH_ICON = 'primaryWithIcon',
  PRIMARY_LARGE_WITH_ICON = 'primaryLargeWithIcon',
  SECONDARY_OUTLINED = 'secondaryOutlined',
  SECONDARY_OUTLINED_SMALL = 'secondaryOutlinedSmall',
  SECONDARY_OUTLINED_WITH_ICON = 'secondaryOutlinedWithIcon',
  SECONDARY_LARGE_OUTLINED_WITH_ICON = 'secondaryLargeOutlinedWithIcon',
  SECONDARY_OUTLINED_ONLY_ICON = 'secondaryOutlinedOnlyIcon',
  SECONDARY_SMALL = 'secondarySmall',
  SECONDARY_WITH_ICON = 'secondaryWithIcon',
  SECONDARY_SMALL_WITH_ICON = 'secondarySmallWithIcon',
  SECONDARY_ONLY_ICON = 'secondaryOnlyIcon',
}

export type Style = Required<
  {
    container: Pick<
      ViewStyle,
      | 'alignSelf'
      | 'backgroundColor'
      | 'borderColor'
      | 'borderWidth'
      | 'flexDirection'
      | 'height'
      | 'width'
    >;
  } & { label: TypographyStyles | {} }
>;

export type Palette = {
  [variant in Variant]: Style;
};
