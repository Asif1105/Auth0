import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import { ApplicationState } from '@shop/app/src/types';
import { DetailCard as Card } from '@shop/dls/src/components/cards';
import { Product } from '@shop/core/src/types';
import { currencyConverter } from '@shop/core/src/utils';
import { PrimaryButton, SecondaryButton } from '@shop/dls/src/components/buttons';
import { InfoPanel } from '@shop/dls/src/components/infoPanel';
import { makeStyles } from '@mui/styles';
import { useRouter } from '@shop/app/src/hooks';
import { useMedia } from '@shop/dls/src/hooks';
import { useWidgetsWrapperStyles } from '../../hooks';
import { setProducts } from '../../store/actions/cart';
import { HomeProps } from './Home';
import * as translations from '../../translations';
import { processCartItems } from './helpers';
import * as Route from '../../routes/RouteDefinitions';

export interface ProductDetailProps extends HomeProps {
  product?: Product | any;
}
export const ProductDetail = ({ ...props }) => {
  const wrapperClasses = useWidgetsWrapperStyles();
  const { items }: any = useSelector(({ cart }: ApplicationState) => cart);
  const dispatch = useDispatch();
  const { history } = useRouter();
  const { isPhone, isTablet } = useMedia();
  const { product }: any = useSelector(({ home }: ApplicationState) => home);

  function handleCartClick(product?: Product) {
    const updated = processCartItems(product, items);
    dispatch(setProducts(updated));
  };

  async function handleCheckoutClick(product?: Product) {
    await handleCartClick?.(product);
    history(Route.Cart);
  };

  const {
    price,
    author,
    pages
  } = product;
  const infoItems = [{
    label : translations.price,
    value : currencyConverter(price)
  },
  {
    label : translations.author,
    value : author
  },
  {
    label : translations.pages,
    value : pages
  }];

  const InfoPanelRenderer = () => (
    <div>
      {infoItems?.map(({ label, value }, i) => {
        return (
          <InfoPanel key={`${label}-${i}`}
            label={label}
            value={value}
            yMargin='10px'
          />
        );
      })}
    </div>
  );

  return (
    <Grid container item
      width={'90%'}
      margin={'0 auto'}
      spacing={2}
      className={wrapperClasses.container}
      direction='row'
      justifyContent={(isPhone || isTablet) ? 'center' : 'flex-start'}
      alignItems='center'>
      <Grid className={wrapperClasses.item}
        item
        alignContent={'center'}
        key={product?.id}
        xs={12}>
        <Card product={product}
          contentHeader={<InfoPanelRenderer />}
          cardAction={
            <>
              <PrimaryButton size="small" padding={'0px'} onClick={function() {
                handleCartClick?.(product);
              }}>{translations.addToCart}</PrimaryButton>
              <SecondaryButton size="small" onClick={function() {
                handleCheckoutClick?.(product);
              }}>{translations.buyNow}</SecondaryButton>
            </>}
        />
      </Grid>
    </Grid>
  );
};

export default ProductDetail;
