import {
  Rating,
  Stack,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { useState } from 'react'
import ProductDetails from './ProductDetails'
import { queries } from '../../api/queries'
import { product } from '../../api/type'
import UseFilter from '../../../../hooks/useFilter'
import { motion } from 'framer-motion'
interface ProductWithId extends product {
  id: number
}
function CardProduct() {
  const filter = UseFilter('filters[category][$eq]')
  const { data, isLoading } = queries.useProducts({
    'filters[category][$eq]': filter,
    populate: '*',
  })
  const [product, setProduct] = useState({
    open: false,
    id: 1,
  })
  console.log(data)
  const handleClick = (id: number) => {
    setProduct({
      open: true,
      id: id,
    })
  }
  if (isLoading) return <Typography>Loading...</Typography>
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      flexWrap="wrap"
      gap={2}
      sx={{
        '@media(max-width:822px)': {
          justifyContent: 'center',
        },
      }}
    >
      {data.map((item: ProductWithId) => (
        <Card
          key={item.id}
          component={motion.div}
          layout
          initial={{ transform: 'scale(0)' ,opacity:0 }}
          animate={{ transform: 'scale(1)', opacity:1 }}
          exit={{ transform: 'scale(0)' }}
          sx={{
            maxWidth: 335,
            width: 1,
            mt: 5,
            display: 'flex',
            flexDirection: 'column',
            ':hover .MuiCardMedia-root': {
              scale: '1.1',
              rotate: '1deg',
              transition: '.3s',
            },
          }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="300"
            image={`${import.meta.env.VITE_BASE_URL}${
              item.attributes.image.data[0].attributes.url
            }`}
          />
          <CardContent>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography gutterBottom variant="h5">
                {item.attributes.title}
              </Typography>
              <Typography>{item.attributes.price}$</Typography>
            </Stack>
            <Typography variant="body2" color="text.secondary">
              {item.attributes.description}
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mt: 'auto',
            }}
          >
            <Button
              startIcon={<ShoppingCartOutlinedIcon />}
              size="large"
              sx={{
                textTransform: 'capitalize',
                fontFamily: 'Open Sans',
              }}
              onClick={() => handleClick(item.id)}
            >
              Add To Cart
            </Button>
            <Rating precision={0.5} name="read-only" value={item.attributes.rating} readOnly />
          </CardActions>
        </Card>
      ))}
      <ProductDetails product={product} setProduct={setProduct} />
    </Stack>
  )
}
export default CardProduct
