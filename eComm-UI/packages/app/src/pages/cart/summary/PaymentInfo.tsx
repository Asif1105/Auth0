import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { currencyConverter } from '@shop/core/src/utils';
import { ApplicationState } from '@shop/app/src/types';
import { useRouter } from '@shop/app/src/hooks';
import { Title } from '@shop/dls/src/components/title';
import { PrimaryButton, SecondaryButton } from '@shop/dls/src/components/buttons';
import { checkout } from '@shop/app/src/store/actions/cart';
import { dlsColor } from '@shop/dls/src/theme/theme';
import { InfoPanel } from '@shop/dls/src/components/infoPanel';
import * as translations from '../../../translations';
import * as Route from '../../../routes/RouteDefinitions';

export enum PaymentInfoItem {
  itemsPrice = 'Item(s) Price',
  taxLabel = 'Tax',
  shippingCharge = 'Shipping Charge',
  totalPrice = 'Total'
};

export type PaymentInfoItemsType = {
  [PaymentInfoItem.itemsPrice]: string;
  [PaymentInfoItem.taxLabel]: string;
  [PaymentInfoItem.shippingCharge]: string;
  [PaymentInfoItem.totalPrice]: string;
};

export const useStyles = makeStyles({
  paymentInfo : {},
  actions     : {
    display        : 'flex',
    justifyContent : 'center',
    alignItems     : 'center'
  }
});

export const PaymentInfo = () => {
  const classes = useStyles();
  const { items }: any = useSelector(({ cart }: ApplicationState) => cart);
  const dispatch = useDispatch();
  const { history }  = useRouter();

  // const [paymentInfo, setPaymentInfo] = useState<PaymentInfoItemsType>();
  // const [infoItems, setInfoItems] = useState<any[]>([]);

  async function handleCheckoutClick(e) {
    e.preventDefault();
    await dispatch(checkout());
    history(Route.Orders);
  }
  
  function handleCancelClick() {
    history(-1);
  }

  function calculatePayment() {
    let _itemsPrice = 0;
    const _tax = 150;
    const _shippingCharge = 45;
    items.forEach(item => {
      _itemsPrice += item?.price;
    });
    const _total = _tax + _shippingCharge + _itemsPrice;
    const paymentInfo = {
      [PaymentInfoItem.itemsPrice]     : currencyConverter(_itemsPrice),
      [PaymentInfoItem.taxLabel]       : currencyConverter(_tax),
      [PaymentInfoItem.shippingCharge] : currencyConverter(_shippingCharge),
      [PaymentInfoItem.totalPrice]     : currencyConverter(_total)
    };

    const infoItems: Array<any> = [{
      label : translations.itemsPrice,
      value : paymentInfo?.[PaymentInfoItem.itemsPrice]
    },
    {
      label : translations.taxLabel,
      value : paymentInfo?.[PaymentInfoItem.taxLabel]
    },
    {
      label : translations.shippingCharge,
      value : paymentInfo?.[PaymentInfoItem.shippingCharge]
    },
    {
      label : translations.totalPrice,
      value : paymentInfo?.[PaymentInfoItem.totalPrice]
    }];
    return infoItems;
  };

  // useEffect(() => {
  //   paymentCalculator?.();
  // }, []);

  const infoItems = calculatePayment?.();
  const lastElementIndex = infoItems?.length - 1;
  return (
    <div className={classes.paymentInfo}>
      <Title variant='h5' label={translations.paymentInfoHeader} />
      {infoItems?.map(({ label, value }, i) => {
        return (
          <InfoPanel key={`${label}-${i}`}
            expandItems
            label={label}
            value={value}
            yPadding='10px'
            yMargin='20px'
            borderTop={i === lastElementIndex ? `1px solid ${dlsColor('grey5')}` : 'none'}
          />
        );
      })}
      <div className={classes.actions}>
        <PrimaryButton size="small" padding={'0px'} onClick={function(e) {
          handleCheckoutClick?.(e);
        }}>{translations.checkout}</PrimaryButton>
        <SecondaryButton size="small" onClick={function() {
          handleCancelClick?.();
        }}>{translations.cancel}</SecondaryButton>
      </div>
    </div>
  );
};

export default PaymentInfo;
