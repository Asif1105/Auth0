import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import { ApplicationState } from '@shop/app/src/types';
import { ProductCard as Card } from '@shop/dls/src/components/cards';
import { Product } from '@shop/core/src/types';
import { PrimaryButton } from '@shop/dls/src/components/buttons';
import { makeStyles } from '@mui/styles';
import { useMedia } from '@shop/dls/src/hooks';
import { useWidgetsWrapperStyles } from '../../hooks';
import { setProductDetail } from '../../store/actions/home';
import { setProducts } from '../../store/actions/cart';
import { HomeProps } from './Home';
import * as Route from '../../routes/RouteDefinitions';
import * as translations from '../../translations';
import { dlsColor } from '@shop/dls/src/theme/theme';
import { processCartItems } from './helpers';

export interface ProductListingsType extends HomeProps {
  products: Product[] | [];
};

export const useStyles = makeStyles({
  products : {
    background    : dlsColor('grey3'),
    paddingBottom : '15px'

  }
});

export const ProductListings = ({ products, handleNavigation }: ProductListingsType) => {
  const { isPhone, isTablet } = useMedia();
  const { items }: any = useSelector(({ cart }: ApplicationState) => cart);
  const dispatch = useDispatch();
  const classes = useStyles();

  const wrapperClasses = useWidgetsWrapperStyles();
  async function handleDetailClick(product: Product) {
    await dispatch(setProductDetail(product));
    handleNavigation?.(`${Route.Home}${Route.ProductDetail}`);
  };

  function handleCartClick(product?: Product) {
    const updated = processCartItems(product, items);
    dispatch(setProducts(updated));
  };

  return (
    <div className={classes.products}>
      <Grid container item
        width={'90%'}
        margin={'0 auto'}
        spacing={2}
        className={wrapperClasses.container}
        direction='row'
        justifyContent={(isPhone || isTablet) ? 'center' : 'flex-start'}
        alignItems='center'>
        {products?.map(product => {
          return (
            <Grid className={wrapperClasses.item}
              item
              alignContent={'center'}
              key={product.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={3}>
              <Card product={product}
                onDetailClick={handleDetailClick}
                cardAction={
                  <PrimaryButton fullWidth size="small" onClick={function() {
                    handleCartClick?.(product);
                  }}>{translations.addToCart}</PrimaryButton>}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default ProductListings;
