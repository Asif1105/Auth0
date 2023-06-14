import React from 'react';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

export type ErrorStateProps = {
  show: boolean;
  onRefresh?: (e: unknown)=> void;
};

const useStyles = makeStyles<Theme, ErrorStateProps>(theme => ({
  paper : {
    width      : '100%',
    height     : '100%',
    boxShadow  : 'none !important',
    background : 'none !important'
  },
  container : {
    width          : '100%',
    height         : '100%',
    display        : 'flex',
    alignItems     : 'center',
    justifyContent : 'center',
    flexDirection  : 'column'
  },
  typography : {
    marginTop : 20
  },
  btn : {
    marginTop : '2%'
  }
}));

export const ErrorState = (props: ErrorStateProps) => {
  const { show, onRefresh } = props;
  const classes = useStyles(props);
  if (show) {
    return (
      <Paper className={classes.paper} elevation={0}>
        <div className={classes.container}>
          <Typography variant='body1' className={classes.typography}>
            Has Error
          </Typography>
        </div>
      </Paper>
    );
  }
  return null;
};
export default ErrorState;
