import React from 'react';
import * as translations from '../translations';
import { useSelector } from 'react-redux';
import { useRouter } from '../hooks';
import { makeStyles } from '@mui/styles';
import { routes } from '../routes';
import { ApplicationState } from '@shop/app/src/types';
import * as RouteDefinitions from '../routes/RouteDefinitions';
import { Title } from '@shop/dls/src/components/title';
import { DLSTheme } from '@shop/dls/src/types';

const useStyles = makeStyles((theme: DLSTheme) => ({
  title : {
    [theme.breakpoints.down('sm')] : {
      marginBottom : '20px'
    }
  }
}));

export const TitleWrapper = () => {
  const classes = useStyles();
  const { path } = useRouter();
  const { product }: any = useSelector(({ home }: ApplicationState) => home);
  function getTitle(path) {
    let title = routes?.filter(route => route?.path === path)[0]?.name;
    if (path.match(RouteDefinitions.ProductDetail)) {
      title = product?.name;
    }
    return title;
  };
  return (
    <div className={classes.title}>
      <Title variant='h4' label={`${translations.title} | ${getTitle(path)}`} />
    </div>
  );
};

export default TitleWrapper;
