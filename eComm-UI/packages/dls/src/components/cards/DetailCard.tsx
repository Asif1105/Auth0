/* eslint-disable max-len */
import React, { ReactElement } from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Card, { CardProps } from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Book } from '../books';
import Typography from '@mui/material/Typography';
import { Product } from '@shop/core/src/types';
import { dlsColor } from '@shop/dls/src/theme/theme';
import { DLSTheme } from '../../types';
import { CardHeader } from '@mui/material';

export interface DetailCardProps extends CardProps {
  product: Product;
  onDetailClick?: (product: Product)=> void;
  cardAction?: any;
  contentHeader?: ReactElement;
  cardHeader?: ReactElement;
  displayCardHeader?: boolean;
  displayActions?: boolean;
  displayDescription?: boolean;
};

export const useStyles = makeStyles((theme: DLSTheme) => ({
  root : {
    boxShadow : 'none !important',
    display   : 'flex',
    flexWrap  : 'wrap'
  },
  paper : {
    display  : 'flex',
    flexWrap : 'wrap'
  },
  bookWrapper : {},
  actionsRoot : {
    padding : '0 !important'
  },
  leftBox : {
    width                          : '40%',
    height                         : 300,
    [theme.breakpoints.down('sm')] : {
      width : '100%'
    }
  },
  rightBox : {
    width                          : '60%',
    height                         : 'auto',
    [theme.breakpoints.down('sm')] : {
      width : '100%'
    }
  }
}));

export const DetailCard = ({
  product,
  onDetailClick,
  cardAction,
  cardHeader,
  contentHeader,
  displayCardHeader = false,
  displayActions = true,
  displayDescription = true
}: DetailCardProps) => {
  const {
    name,
    description,
    id
  } = product;
  const classes = useStyles();
  return (
    <Card classes={{
      root : classes.root
    }}>
      {displayCardHeader && (<CardHeader content={cardHeader} />)}
      <Box className={classes.leftBox}>
        <div className={classes.bookWrapper}>
          <Book content={name} width={'180px'} />
        </div>
      </Box>
      <Box className={classes.rightBox}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          {contentHeader}
          {displayActions && (<CardActions classes={{
            root : classes.actionsRoot
          }}>
            {cardAction}
          </CardActions>)}
          {displayDescription && (<Typography component='div' variant='body2' color={dlsColor('grey4')}>
            {/* {description} */}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Typography>)}
        </CardContent>
      </Box>
    </Card>
  );
};

export default DetailCard;
