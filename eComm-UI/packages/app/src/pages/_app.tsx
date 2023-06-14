import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { useHasMounted } from '@shop/core/src/hooks';
import { isDevMode } from '../utils';
import { ErrorBoundary } from '../notifications';
import createDefaultTheme from '@shop/dls/src/theme/theme';
import { StoreProps } from '../store';
import { getProducts } from '../store/actions/home';
import { getOrders } from '../store/actions/orders';
import * as Route from '@shop/app/src/routes/RouteDefinitions';
import Layout from './Layout';

const isDev = isDevMode();

// eslint-disable-next-line react/prop-types
export function ShopSmart({ Component, pageProps }: StoreProps) {
  const [initialized, setInitialized] = useState(true);

  const theme = createDefaultTheme();

  return (
    <>
      {initialized && (<ThemeProvider theme={theme}>
        <ErrorBoundary>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ErrorBoundary>
      </ThemeProvider>)}
    </>
  );
};
export default ShopSmart;
