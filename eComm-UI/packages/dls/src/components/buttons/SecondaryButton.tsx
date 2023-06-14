import React from 'react';
import { makeStyles } from '@mui/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { dlsColor, dlsAlt } from '@shop/dls/src/theme/theme';

export interface SecondaryButtonProps extends ButtonProps {
  children: string;
}

const useStyles = makeStyles({
  container : {
    padding   : '5px',
    '&:focus' : {
      outline : `2px solid ${dlsColor('caBlue')}`
    }
  },
  disabledContainer : {
    outline : 'none'
  },
  root : {
    backgroundImage    : `linear-gradient(-75deg, transparent 50%, ${dlsColor('grey1')} 50%)`,
    backgroundPosition : '100%',
    backgroundSize     : '300%',
    transition         : 'background .5s ease-out',
    borderColor        : `${dlsColor('grey1')} !important`,
    color              : `${dlsColor('grey1')} !important`,
    borderWidth        : '2px',
    fontSize           : '12px',
    lineHeight         : '24px',
    '&:hover'          : {
      backgroundPosition : 0,
      boxShadow          : 'none',
      color              : `${dlsColor('white')} !important`
    },
    '&:active' : {
      backgroundImage : `linear-gradient(-75deg, transparent 50%, ${dlsColor('grey1')} 50%)`
    },
    '&disabled' : {
      background      : dlsAlt('components', 'btn', 'disabledBackground'),
      borderWidth     : 0,
      backgroundImage : 'none'
    }
  },
  rootAlt : {
    backgroundImage    : `linear-gradient(-75deg, transparent 50%, ${dlsColor('grey1')} 50%)`,
    backgroundPosition : '100%',
    backgroundSize     : '300%',
    transition         : 'background .5s ease-out',
    borderColor        : `${dlsColor('grey1')} !important`,
    color              : `${dlsColor('grey1')} !important`,
    borderWidth        : '2px',
    fontSize           : '12px',
    lineHeight         : '24px',
    '&:hover'          : {
      backgroundPosition : 0,
      boxShadow          : 'none',
      color              : dlsColor('white')
    },
    '&:active' : {
      backgroundImage : `linear-gradient(-75deg, transparent 50%, ${dlsColor('grey1')} 50%)`
    },
    '&:disabled' : {
      background      : dlsAlt('components', 'btn', 'disabledBackground'),
      borderWidth     : 0,
      backgroundImage : 'none'
    }
  },
  disabled : {}
});

/**
 *
 * @SecondaryButton
 *
 * Used for medium-emphasis items that may also be important, but don't have to be
 * the primary action on the page.
 *
 * ```typescript
 *
 * import React from 'react';
 * import { SecondaryButton } from '@ion/dls/src/components/buttons';
 *
 * function MyComponent {
 *   return (
 *     <React.Fragment>
 *       <SecondaryButton>Default</SecondaryButton>
 *       <br />
 *       <SecondaryButton disabled>Disabled</SecondaryButton>
 *       <br />
 *       <SecondaryButton fullWidth>Full Width</SecondaryButton>
 *     </React.Fragment>
 *   );
 * }
 *
 * ```
 *
 */
const SecondaryButton = ({ children, ...props }: SecondaryButtonProps) => {
  const classes = useStyles();
  return (
    <div className={props.disabled ? classes.disabledContainer : classes.container}
      tabIndex={props.disabled ? -1 : 0}>
      <Button variant='outlined'
        tabIndex={-1}
        classes={{
          root     : props.fullWidth ? classes.rootAlt : classes.root,
          disabled : classes.disabled
        }}
        disableRipple
        disableFocusRipple
        {...props}>
        {children}
      </Button>
    </div>
  );
};

export { SecondaryButton };
