import React, { ReactNode } from 'react';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { dlsColor } from '@shop/dls/src/theme/theme';

export interface LayoutProps {
  children?: ReactNode;
  backgroundColor?: string;
  id?: string;
};

export const useStyles = makeStyles({
  layout : {
    border : `1px solid ${dlsColor('grey5')}`
  }
});

export const Layout = ({ children }: LayoutProps) => {
  const classes = useStyles();

  return (
    <Container maxWidth='lg'>
      <div className={classes.layout}>
        {children}
      </div>
    </Container>
  );
};

export default Layout;
