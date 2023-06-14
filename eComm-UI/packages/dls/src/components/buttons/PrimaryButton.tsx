import React, { Component, MouseEvent, ReactElement } from 'react';
import { makeStyles } from '@mui/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import classnames from 'classnames';
import { dlsColor, dlsAlt } from '@shop/dls/src/theme/theme';

export interface PrimaryButtonProps extends ButtonProps {
  children: Component | ReactElement | string;
  padding?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  display?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: MouseEvent<HTMLButtonElement>)=> void;
};

export interface UseStylesProps {
  fullWidth?: boolean;
  padding?: string;
  display?: string;
};

const useStyles = makeStyles({
  container : {
    width     : ({ fullWidth }: UseStylesProps) => fullWidth ? '100%' : 'auto',
    padding   : ({ padding }: UseStylesProps) => padding || '5px',
    display   : ({ display }: UseStylesProps) => display || 'block',
    '&:focus' : {
      outline : `2px solid ${dlsColor('caBlue')}`
    }
  },
  disabledContainer : {
    outline : 'none',
    padding : ({ padding }: UseStylesProps) => padding || '5px',
    display : ({ display }: UseStylesProps) => display || 'block',
    width   : ({ fullWidth }: UseStylesProps) => fullWidth ? '100%' : 'auto'
  },
  root : {
    backgroundImage    : `linear-gradient(-75deg, ${dlsColor('grey1')} 50%, ${dlsAlt('components', 'btn', 'activePrimaryColor')} 50%)`,
    backgroundPosition : '100%',
    backgroundSize     : '300%',
    transition         : 'background .5s ease-out',
    background         : dlsColor('grey1'),
    color              : dlsColor('white'),
    fontSize           : '12px',
    lineHeight         : '24px',
    boxShadow          : 'none',
    '&:hover'          : {
      backgroundPosition : 0,
      boxShadow          : 'none',
      color              : dlsColor('white')
    },
    '&:active' : {
      backgroundImage : `linear-gradient(-75deg, ${dlsColor('grey1')} 50%, ${dlsAlt('components', 'btn', 'activePrimaryColor')} 50%)`
    },
    '&$disabled' : {
      color           : dlsAlt('components', 'btn', 'disabledPrimaryColor'),
      backgroundImage : 'none'
    }
  },
  rootAlt : {
    width : '100%'
  },
  disabled : {}
});

const PrimaryButton = ({ children, padding, display, fullWidth, ...props }: PrimaryButtonProps) => {
  const classes = useStyles({ padding, fullWidth, display });
  return (
    <div className={props.disabled ? classes.disabledContainer : classes.container}
      tabIndex={props.disabled ? -1 : 0}>
      <Button variant='contained'
        tabIndex={-1}
        classes={{
          root     : classnames(classes.root, fullWidth ? classes.rootAlt : null),
          disabled : classes.disabled
        }}
        disableRipple
        disableFocusRipple
        color='primary'
        {...props}>
        {children}
      </Button>
    </div>
  );
};

export { PrimaryButton };
