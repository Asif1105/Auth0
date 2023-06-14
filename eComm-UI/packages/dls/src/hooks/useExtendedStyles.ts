import { makeStyles } from '@mui/styles';
import merge from 'lodash.merge';
import { GenericObject } from '@shop/core/src/types';
import { DLSTheme } from '../types';
/**
 * @useExtendStyles
 *
 * hook for re-using styles and providing overrides to the styles.
 * The base styles and overrides are functions that get the theme
 * passed as an argument.
 *
 * ```typescript
 *
 * import {useExtendStyles} from '@ion/dls/src/hooks';
 *
 * const sharedStyles = (theme) => ({
 *   title : {
 *     color : theme.palette.red
 *   }
 * });
 *
 * // Optional
 * const overrides = (theme) => ({
 *   title : {
 *     color : theme.palette.pink
 *   }
 * });
 *
 * const Component = () => {
 *   const styles = useExtendStyles(sharedStyles, overrides);
 *   const classes = styles();
 *
 *   ...
 * }
 *
 * ```
 *
 */
export const useExtendStyles = (
  baseStyles: (theme: DLSTheme)=> GenericObject,
  overrides?: (theme: DLSTheme)=> GenericObject
): ()=> GenericObject => makeStyles((theme: DLSTheme) => ({
  ...merge(baseStyles(theme), overrides?.(theme))
}));

export default useExtendStyles;
