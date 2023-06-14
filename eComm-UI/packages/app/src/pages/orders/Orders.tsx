/* eslint-disable operator-linebreak */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import { Product } from '@shop/core/src/types';
import { useHasMounted } from '@shop/core/src/hooks';
import { CTAButton } from '@shop/dls/src/components/buttons';
import { Book } from '@shop/dls/src/components/books';
import { dls, dlsColor } from '@shop/dls/src/theme/theme';
import { useMedia } from '@shop/dls/src/hooks';
import { Loader } from '@shop/dls/src/components/loader';
import { Title } from '@shop/dls/src/components/title';
import { InfoPanel } from '@shop/dls/src/components/infoPanel';
import { currencyConverter } from '@shop/core/src/utils';
import { useRouter } from '../../hooks';
import { ApplicationState } from '../../types';
import * as Route from '../../routes/RouteDefinitions';
import * as translations from '../../translations';
import { getOrders } from '../../store/actions/orders';

export interface OrdersProps {};

const useStyles = makeStyles({
  orders : {
    display : 'block',
    padding : '30px 0'
  },
  alignCenter : {
    textAlign : 'center'
  },
  emptyCart : {
    display        : 'flex',
    flexDirection  : 'column',
    justifyContent : 'center',
    alignItems     : 'center'
  },
  cta : {
    color          : dlsColor('caBlue'),
    textDecoration : 'underline',
    cursor         : 'pointer'
  },
  itemWrapper : {
    background : dlsColor('grey6'),
    border     : `1px solid ${dlsColor('grey5')}`,
    padding    : '0 !important',
    margin     : '20px 0 !important'
  },
  itemHeader : {
    padding        : '15px',
    background     : dlsColor('grey3'),
    display        : 'flex',
    justifyContent : 'space-between',
    alignItems     : 'center'
  },
  itemContent : {
    display        : 'flex',
    justifyContent : 'flex-start',
    alignItems     : 'center'
  },
  productInfo : {
    alignSelf : 'flex-start'

  }
});

export const Orders = (OrdersProps) => {
  const classes = useStyles();
  const { orderedItems: items }: any = useSelector(({ orders }: ApplicationState) => orders);
  const { history } = useRouter();

  const [initialized, setInitialized]       = useState(false);
  const [isInitializing, setIsInitializing] = useState(false);
  const isMounted  = useHasMounted();
  const dispatch   = useDispatch();
  const { isPhone, isTablet } = useMedia();

  function handleShoppingClick() {
    history(Route.Home);
  }

  useEffect(() => {
    (async function() {
      if (isMounted && !initialized && !isInitializing) {
        setIsInitializing(true);
        await dispatch(getOrders());
        setIsInitializing(false);
        setInitialized(true);
      }
    })();
  }, [isMounted, initialized, isInitializing]);

  const InfoPanelRenderer = ({ infoItems }: {infoItems: Array<any>}) => (
    <div className={classes.productInfo}>
      {infoItems?.map(({ label, value }, i) => {
        return (
          <InfoPanel key={`${label}-${i}`}
            renderAsHeader={i === 0}
            displayLabel={false}
            label={label}
            value={value}
            yMargin='10px'
          />
        );
      })}
    </div>
  );

  function ItemsRenderer({ item }: {item: Product}) {
    const {
      name,
      author,
      price,
      purchaseDate
    } = item;
    const infoItems = [{
      label : translations.name,
      value : name
    },
    {
      label : translations.author,
      value : author
    },
    {
      label : translations.price,
      value : currencyConverter(price)
    }];
    return (
      <>
        <div className={classes.itemHeader}>
          <span>{`${translations.orderPlaced}: ${purchaseDate}`}</span>
          <span>{`${translations.status}: ${translations.delivered}`}</span>
        </div>
        <div className={classes.itemContent}>
          <Book content={name} width={'180px'} customMargin='15px' />
          <InfoPanelRenderer infoItems={infoItems} />
        </div>
      </>
    );
  };

  return (
    <>
      {initialized && (
        <div className={classes.orders}>
          {items?.length > 0
            ? (<Grid container item
              width={'90%'}
              margin={'0 auto'}
              spacing={2}
              direction='row'
              justifyContent={(isPhone || isTablet) ? 'center' : 'flex-start'}
              alignItems='center'>
              {items?.map((item, i) => (<Grid item
                className={classes.itemWrapper}
                alignContent={'center'}
                key={`${item?.id}-${i}`}
                xs={12}>
                {<ItemsRenderer item={item} />}
              </Grid>))}
            </Grid>
            )
            : (
              <div className={classes.emptyCart}>
                <h1 className={classes.alignCenter}>
                  {translations.emptyOrders}
                </h1>
                <CTAButton onClick={handleShoppingClick}>
                  {translations.startShopping}
                </CTAButton>
              </div>
            )}
        </div>)
      }
      {isInitializing && <Loader />}
    </>
  );
};

export default Orders;
