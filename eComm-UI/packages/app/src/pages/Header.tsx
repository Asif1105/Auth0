import React from 'react';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Nav from './Nav';
import Title from './Title';
import { dlsColor } from '@shop/dls/src/theme/theme';
import { DLSTheme } from '@shop/dls/src/types';
import { Logout } from './logout';

const useStyles = makeStyles((theme: DLSTheme) => ({
  header : {
    background : dlsColor('grey2'),
    padding    : '15px 0'
  }
}));

export const Header = ({ ...props }) => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Grid container
        width={'90%'}
        margin={'0 auto'}
        direction='row'
        justifyContent='flex-end'
        alignItems='center'>
        <Grid item container xs={12} sm={6}>
          <Title />
        </Grid>
        <Grid item container xs={12} sm={6} justifyContent='flex-end'>
          <Nav />
        </Grid>
        <Grid item container xs={12} justifyContent='flex-end'>
          <Logout />
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
