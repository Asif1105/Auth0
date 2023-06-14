import React from 'react';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import { useRouter } from '../hooks';
import { routes } from '../routes';
import { RouteProps } from '../types';
import { dlsColor } from '@shop/dls/src/theme/theme';
import { DLSTheme } from '@shop/dls/src/types';

export const useStyles = makeStyles((theme: DLSTheme) => ({
  link : {
    cursor         : 'pointer',
    textAlign      : 'center',
    borderRight    : `1px solid ${dlsColor('grey4')}`,
    '&:last-child' : {
      borderRight : 'none'
    }
  },
  label : {
    fontSize   : '14px',
    fontWeight : 'bold'
  }
}));

export const Nav = ({ ...props }) => {
  const { history } = useRouter();
  const classes = useStyles();

  function handleClick(path) {
    history(path);
  }
  return (
    <>
      {routes.map(({ id, name, path }: RouteProps, i) => {
        return (
          <Grid item
            className={classes.link}
            justifySelf='flex-end'
            key={id}
            xs={4}
            sm={4}
            md={3}
            lg={2}>
            <span className={classes.label} onClick={function() {
              handleClick(path);
            }}>
              {name}
            </span>
          </Grid>
        );
      })}
    </>
  );
};

export default Nav;
