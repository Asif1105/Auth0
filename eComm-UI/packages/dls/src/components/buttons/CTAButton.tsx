import React from 'react';
import { makeStyles } from '@mui/styles';
import { dlsColor } from '../../theme/theme';

export interface CTAButtonProps {
  children: string;
  onClick: Function;
  id?: string;
};

const useStyles = makeStyles({
  cta : {
    color          : dlsColor('caBlue'),
    textDecoration : 'underline',
    cursor         : 'pointer'
  }
});

export const CTAButton = ({ children, onClick, id }: CTAButtonProps) => {
  const classes = useStyles();
  return (
    <span id={id} className={classes.cta} onClick={function() {
      onClick?.();
    }}>
      {children}
    </span>
  );
};

export default CTAButton;
