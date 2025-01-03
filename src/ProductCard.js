import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';

const ProductCard = ({ product, imageSrc }) => {
  return (
    <Card sx={{ 
      width: 320,
    }}>
      <div>
        <Typography 
          level="title-lg" 
          sx={{ 
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {product.title}
        </Typography>
        <Typography level="body-sm">{product.category}</Typography>
        <IconButton
          aria-label="bookmark product"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
        >
        </IconButton>
      </div>
      <AspectRatio ratio="4/3" sx={{ my: 2 }}>
        <img
          src={imageSrc}
          loading="lazy"
          alt={product.title}
          style={{ objectFit: 'contain' }}
        />
      </AspectRatio>
      <CardContent orientation="horizontal" sx={{ mt: 'auto' }}>
        <div>
          <Typography level="body-xs">Price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            ${product.price}
          </Typography>
        </div>
        <Button
          variant="solid"
          size="md"
          color="primary"
          aria-label="Explore product"
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
        >
          Buy Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
