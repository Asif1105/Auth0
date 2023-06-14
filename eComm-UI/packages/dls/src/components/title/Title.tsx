import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, TypographyProps, TypographyVariantsOptions } from '@mui/material';

const useStyles = makeStyles({
  titleWrapper : {}
});

export interface TitleProps extends TypographyProps {
  label: string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export const Title = ({
  label,
  variant = 'h1'
}: TitleProps) => {
  const classes = useStyles();
  return (
    <div className={classes.titleWrapper}>
      <Typography variant={variant}>{label}</Typography>
    </div>
  );
};

export default Title;
