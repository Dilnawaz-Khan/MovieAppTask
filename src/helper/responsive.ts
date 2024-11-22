import {ImageStyle, RegisteredStyle, TextStyle, ViewStyle} from 'react-native';
import {
  ScaledSheet,
  moderateScale,
  verticalScale,
} from 'react-native-size-matters';

/**
 * Utility type to define valid styles for components.
 */
type NamedStyles<T> = {[P in keyof T]: ViewStyle | TextStyle | ImageStyle};

/**
 * Utility type to map scaled styles to RegisteredStyle.
 */
type ScaledStyles<T> = {[P in keyof T]: RegisteredStyle<T[P]>};

/**
 * Responsive scaling helper function.
 *
 * @param size - The size value to scale.
 * @param vertical - Whether to apply vertical scaling. Defaults to `false`.
 * @param factor - The factor for moderate scaling. Defaults to `0.5`.
 * @returns The scaled size.
 */
export const responsiveSize = (
  size: number,
  vertical: boolean = false,
  factor: number = 0.5,
): number => {
  if (vertical) {
    return verticalScale(size);
  }
  return moderateScale(size, factor);
};

/**
 * Create a scaled stylesheet for responsive designs.
 *
 * @param styles - An object containing styles with optional scaling suffixes.
 * @returns A responsive style sheet.
 */
export const responsiveStyles = <T extends NamedStyles<T>>(
  styles: T,
): ScaledStyles<T> => {
  return ScaledSheet.create(styles) as ScaledStyles<T>;
};

export default {
  responsiveSize,
  responsiveStyles,
};
