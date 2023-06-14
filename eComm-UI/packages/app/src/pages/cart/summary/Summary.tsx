import React from 'react';
import { makeStyles } from '@mui/styles';
import ShoppingBag from './ShoppingBag';
import PaymentInfo from './PaymentInfo';

export interface CartSummaryProps {
  items?: Array<any>;
};

const useStyles = makeStyles(theme => ({
  summary : {
    display       : 'flex',
    flexDirection : 'column',
    '& > div'     : {
      margin : '10px 0'
    }
  }
}));

export const CartSummary = ({ items }: CartSummaryProps) => {
  const classes = useStyles();
  return (
    <div className={classes.summary}>
      <ShoppingBag items={items} />
      <PaymentInfo />
    </div>
  );
};

export default CartSummary;
