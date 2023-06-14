/* eslint-disable operator-linebreak */
import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { useMedia } from '@shop/dls/src/hooks';
import { ApplicationState } from '@shop/app/src/types';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { DLSTheme } from '@shop/dls/src/types';
import * as translations from '../../translations';
import { Loader } from '@shop/dls/src/components/loader';

const ShippingInfo = lazy(() => import('./shipping/Shipping'));
const Summary = lazy(() => import('./summary/Summary'));

export interface CartProps {};

export const useStyles = makeStyles((theme: DLSTheme) => ({
  cart : {
    padding : '20px 0'
  },
  container : {},
  item      : {},
  emptyCart : {
    display        : 'flex',
    justifyContent : 'center',
    alignItems     : 'flex-start'
  }
}));

export const Cart = () => {
  const classes = useStyles();
  const { items }: any = useSelector(({ cart }: ApplicationState) => cart);
  const { isPhone, isTablet } = useMedia();

  return (
    <div className={classes.cart}>
      <Grid container item
        width={'90%'}
        margin={'0 auto'}
        spacing={2}
        className={classes.container}
        direction='row'
        justifyContent={(isPhone || isTablet) ? 'center' : 'flex-start'}
        alignItems='center'>
        <Grid className={classes.item}
          item
          alignSelf='flex-start'
          alignContent={'center'}
          xs={12}
          sm={12}
          md={6}>
          <Suspense fallback={<Loader />}>
            <ShippingInfo />
          </Suspense>
        </Grid>
        <Grid className={classes.item}
          item
          alignContent={'center'}
          xs={12}
          sm={12}
          md={6}>
          {items?.length > 0
            ? (<Suspense fallback={<Loader />}>
              <Summary items={items} />
            </Suspense>)
            : (
              <div className={classes.emptyCart}>
                <h2>{translations.emptyCart}</h2>
              </div>
            )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Cart;
