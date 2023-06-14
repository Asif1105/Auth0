import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { Title } from '@shop/dls/src/components/title';
import { CTAButton } from '@shop/dls/src/components/buttons';
import { Carousel } from '@shop/dls/src/components/carousel';
import { Book } from '@shop/dls/src/components/books';
import { setProducts } from '@shop/app/src/store/actions/cart';
import * as translations from '../../../translations';

export interface ShoppingBagProps {
  items?: Array<any>;
};

const useStyles = makeStyles(theme => ({
  cartWrapper : {
    display       : 'flex',
    flexDirection : 'column'
  },
  shoppingBag : {
    position : 'relative'
  },
  cartPaymentWrapper : {},
  slideWrapper       : {},
  slide              : {},
  slideItem          : {
    '& label' : {
      width                    : '100%',
      marginRight              : '0px',
      '& .MuiTypography-body1' : {
        width : '100%'
      }
    }
  },
  ctaWrapper : {
    position : 'absolute',
    right    : 0,
    top      : 0
  }
}));

export const ShoppingBag = ({ items }: ShoppingBagProps) => {
  const classes = useStyles();
  const activeSlide = useRef(0);
  const slideRef = useRef(null);
  const dispatch = useDispatch();

  function handleClearCartClick() {
    dispatch(setProducts([]));
  };

  return (
    <div className={classes.shoppingBag}>
      <div className={classes.ctaWrapper}>
        <CTAButton id='clearCart' onClick={handleClearCartClick}>
          {translations.clearCart}
        </CTAButton>
      </div>
      <Title variant='h5' label={translations.shoppingBagHeader} />
      <Carousel index={activeSlide.current}
        slideClassName={classes.slideWrapper}
        containerStyle={{
          maxWidth : 'calc(100vw - 52px)'
        }}>
        {
          items?.map((item, i) => {
            return (
              <div className={classes.slide}
                key={`item-slide-${i}`}
                ref={activeSlide.current === i ? slideRef : null}>
                <Book content={item?.name} width={'180px'} />
              </div>
            );
          })
        }
      </Carousel>
    </div>
  );
};

export default ShoppingBag;
