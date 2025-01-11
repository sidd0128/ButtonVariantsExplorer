# Button Component Readme

This Readme provides a comprehensive guide to the `Button` component, detailing its usage, available props, styling, and implementation details.

## Usage Examples

Here are some examples of how to use the `Button` component in different scenarios:

### **Button with Label**
```typescript
import Button from '../components/Button';
import { Variant } from '../components/Button/types';

<Button
  variant={Variant.PRIMARY}
  label="Press Me"
  onPress={() => console.log('Pressed!')}
/>
```
**Description**: A primary button with a label. When pressed, it triggers the `onPress` function.

### **Button with Icon**
```typescript
<Button
  variant={Variant.SECONDARY_WITH_ICON}
  icon="rocket"
  onPress={() => console.log('Pressed!')}
/>
```
**Description**: A secondary button with an icon. Useful for actions that need a visual representation in addition to the label.

### **Disabled Button**
```typescript
<Button
  variant={Variant.PRIMARY}
  label="Disabled"
  onPress={() => {}}
  isEnabled={false}
/>
```
**Description**: A disabled button that does not respond to user interactions.

---

## Styling and Logic Details

### **Overview**
The styling of the `Button` component is managed through a dynamic `StyleSheet`, making it customizable based on the button's **variant**, **size**, and **state** (enabled/disabled). The styles are organized into reusable patterns for maintainability and scalability.

### **Key Concepts**

#### 1. **Common Styles**
- Defined in the `commonStyles` object, which includes reusable blocks like colors, sizes, and alignments.
- Example:
  ```typescript
  const commonStyles = StyleSheet.create({
    primaryContainer: {
      backgroundColor: colors.newPrimaryColor,
    },
    largeContainer: {
      height: 56,
      width: '100%',
    },
    primaryLabel: {
      color: colors.white,
    },
  });
  ```
  **Purpose**: Avoid code duplication by centralizing commonly used styles.

#### 2. **Palette (Enabled State)**
- Maps button `variants` to their respective styles when **enabled**.
- Example:
  ```typescript
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
  };
  ```
  **Purpose**: Define the visual representation of different button variants when active.

#### 3. **PaletteDisabled (Disabled State)**
- Similar to `palette`, but specifically for disabled buttons.
- Example:
  ```typescript
  export const paletteDisabled: Palette = {
    primary: {
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
  };
  ```
  **Purpose**: Define styles for buttons when they are not interactive.

#### 4. **Dynamic Style Generator (`styles`)**
- Generates a `StyleSheet` dynamically based on:
  - **Variant**: Specifies the button's style (e.g., `primary`, `secondaryOutlined`).
  - **Colors**: Customizes the theme colors.
  - **State**: Toggles between `palette` and `paletteDisabled` based on whether the button is enabled.
- Example:
  ```typescript
  const styles = (variant: Variant, _colors: Colors, isEnabled: boolean) =>
    StyleSheet.create({
      container: {
        ...palette[variant].container,
        backgroundColor:
          variant === Variant.PRIMARY
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
  ```
  **Purpose**: Dynamically apply styles based on the input properties.

---

## Component Implementation Details

### **Overview**
The `Button` component is a flexible and reusable UI component that supports various configurations such as labels, icons, and different styles.

### **Key Concepts**

#### 1. **Props Handling**
- The component distinguishes between buttons with labels and buttons with icons using TypeScript's union types.
- Example:
  ```typescript
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
    variant: Variant;
  } & ButtonCommonProps & (ButtonWithLabelProps | ButtonWithIconProps);
  ```
  **Purpose**: Ensure type safety and flexibility for different button configurations.

#### 2. **Icon Rendering**
- The `renderIcon` function dynamically renders an icon based on the button's variant and props.
- Example:
  ```typescript
  const renderIcon = (props: ButtonProps, colors: Colors) => {
    if ('icon' in props) {
      return (
        <Icon
          name={props.icon}
          size={getIconSize(props)}
          color={styles(props.variant, colors, props.isEnabled ?? true).label.color}
        />
      );
    }
    return null;
  };
  ```
  **Purpose**: Add visual elements to the button when required.

#### 3. **Label Rendering**
- The `renderLabel` function conditionally renders the button's label if the variant supports it.
- Example:
  ```typescript
  const renderLabel = (props: ButtonProps, colors: Colors) => {
    if ('label' in props) {
      return (
        <CustomText style={styles(props.variant, colors, props.isEnabled ?? true).label}>
          {props.label}
        </CustomText>
      );
    }
    return null;
  };
  ```
  **Purpose**: Display text on the button.

#### 4. **Touchable Component**
- The `TouchableOpacity` component wraps the button, handling user interactions and accessibility.
- Example:
  ```typescript
  <TouchableOpacity
    accessibilityLabel={props.testId}
    style={styles(props.variant, colors, props.isEnabled ?? true).container}
    onPress={props.onPress}
    disabled={!props.isEnabled}
  >
    {renderIcon(props, colors)}
    {renderLabel(props, colors)}
  </TouchableOpacity>
  ```
  **Purpose**: Make the button interactive and accessible.

---

## Benefits of the Approach
1. **Type Safety**: Ensures that the correct props are passed for each button configuration.
2. **Flexibility**: Supports multiple variants, icons, and labels.
3. **Reusability**: Modular functions like `renderIcon` and `renderLabel` promote code reuse.
4. **Scalability**: Easily extendable to support new button variants or features.

---

Feel free to extend or modify the examples and logic provided above to suit your application needs!

