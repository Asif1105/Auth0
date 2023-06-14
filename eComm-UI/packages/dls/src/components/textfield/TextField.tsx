import React, { ReactNode, useEffect } from 'react';
import TextField, { StandardTextFieldProps } from '@material-ui/core/TextField';
import { GenericObject } from '@shop/core/src/types';
import { useExtendStyles } from '@shop/dls/src/hooks';
import theme, { dlsAlt, dlsColor } from '@shop/dls/src/theme/theme';
import { DLSTheme } from '@shop/dls/src/types';

export interface TextFieldTypes {
  onMount?: Function;
  label?: string | ReactNode;
  hasError?: boolean;
  errorText?: string | ReactNode;
  fieldLabel?: string | ReactNode;
  required?: boolean;
  placeholder?: string | ReactNode;
  inputProps?: GenericObject;
  defaultValue?: string | number | unknown;
  autoComplete?: 'on' | 'off';
  styleOverrides?: (theme: DLSTheme)=> GenericObject;
  style?: object;
}

type Props = TextFieldTypes & StandardTextFieldProps;

const useStyles = theme => ({
  root : {
    '&:hover' : {
      backgroundColor : dlsAlt('components', 'textfield', 'hoverBackgroundColor')
    }
  },
  inputRoot : {
    '&:hover' : {
      backgroundColor : dlsAlt('components', 'textfield', 'hoverBackgroundColor')
    },
    '& input' : {
      paddingLeft : 'inherit'
    }
  },
  underline : {
    backgroundColor : dlsColor('white'),
    '&:after'       : {
      borderColor : dlsColor('caBlue')
    },
    '&:before' : {
      borderColor       : `${dlsColor('grey5')} !important`,
      borderBottomWidth : '1px !important'
    }
  },
  underlineError : {
    '&:after' : {
      borderColor : theme.palette.error.main
    }
  },
  floatingLabel : {
    zIndex      : 1,
    '&.focused' : {
      color : dlsColor('caBlue')
    }
  },
  floatingLabelError : {
    zIndex      : 1,
    '&.focused' : {
      color : `${theme.palette.error.main}`
    }
  },
  disabled : {
    '&' : {
      pointerEvents : 'none !important'
    },
    '&:before' : {
      borderBottomStyle : 'solid !important'
    }
  },
  shrink : {
    transformOrigin : '0px',
    marginLeft      : '3px'
  },
  fieldLabel : {
    color        : dlsColor('grey2'),
    marginBottom : '8px',
    fontFamily   : 'Roboto',
    fontWeight   : 400,
    fontSize     : 14,
    lineHeight   : '20px !important'
  },
  requiredAsterisk : {
    color  : dlsColor('aaBlue'),
    margin : '0 2px'
  }
});

/**
 * @TextField
 *
 * Defines the TextField component. This component is reusable and can be custom
 * rendered with props.
 *
 * ```typescript
 *
 *   <TextField label='Name'
 *     hasError
 *     errorText='Please enter a valid Name' />
 *
 * ```
 */
const TextFieldWrapper = ({
  onMount,
  label,
  fieldLabel,
  placeholder,
  errorText,
  inputProps,
  style,
  styleOverrides,
  defaultValue,
  hasError = false,
  required = false,
  autoComplete = 'on',
  ...props
}: Props) => {
  const _styleOverrides: any = style ? () => (style) : null;
  const styles: any      = useExtendStyles(useStyles, _styleOverrides || styleOverrides);
  const classes         = styles();

  useEffect(() => {
    onMount?.();
  }, []);

  return (
    <>
      {fieldLabel && <div className={classes.fieldLabel}>
        {fieldLabel}
        {required && <span className={classes.requiredAsterisk}>*</span>}
      </div>}
      <TextField error={hasError}
        className={classes.root}
        helperText={hasError && errorText}
        required={required}
        InputProps={{
          classes : {
            root      : classes.inputRoot,
            underline : hasError ? classes.underlineError : classes.underline,
            disabled  : classes.disabled
          }
        }}
        InputLabelProps={{
          classes : {
            root    : hasError ? classes.floatingLabelError : classes.floatingLabel,
            focused : 'focused',
            shrink  : classes.shrink
          }
        }}
        inputProps={{ placeholder, ...inputProps, autoComplete: autoComplete }}
        label={!placeholder && label}
        defaultValue={defaultValue}
        {...props}
      />
    </>
  );
};

export default TextFieldWrapper;
