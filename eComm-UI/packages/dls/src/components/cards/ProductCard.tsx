import React from 'react';
import Card, { CardProps } from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardHeader } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import { Product } from '@shop/core/src/types';
import { dlsColor } from '@shop/dls/src/theme/theme';
import { Book } from '../books';

export interface ProductCardProps extends CardProps {
  product: Product;
  onDetailClick: (product: Product)=> void;
  cardAction?: any;
};

const useStyles = makeStyles({
  card : {
    background : dlsColor('white')
  },
  bookWrapper : {
    cursor : 'pointer'
  }
});

export const ProductCard = ({
  product,
  onDetailClick,
  cardAction
}: ProductCardProps) => {
  const {
    name,
    description,
    id
  } = product;
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <div className={classes.bookWrapper} onClick={function() {
        onDetailClick?.(product);
      }}>
        <Book content={name} />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography component='div' variant="body2" color={dlsColor('black')}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {cardAction}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
