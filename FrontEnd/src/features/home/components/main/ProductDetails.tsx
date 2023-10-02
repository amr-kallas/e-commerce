import { Box, Button, Stack, Typography } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import CloseIcons from '../../../../components/icons/CloseIcons'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { queries } from '../../api/queries'
import { useState } from 'react'
type ProductState = {
  open: boolean
  id: number
}
type open = {
  product: ProductState
  setProduct: React.Dispatch<React.SetStateAction<ProductState>>
}
const ProductDetails = ({ setProduct, product }: open) => {
  const [selectedImg, setSelectedImg] = useState(0)
  const { data, isLoading } = queries.useProduct(product.id)
  if (isLoading) return
  console.log(data.attributes, isLoading)
  const handleClose = () => {
    setProduct((prev) => ({ ...prev, open: false }))
  }
  return (
    <Dialog
      open={product.open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        '.MuiPaper-root.MuiDialog-paper': {
          maxWidth: { xs: 1, md: 800 },
          width: 1,
          overflowX: 'hidden',
        },
      }}
    >
      <Stack
        sx={{
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Box
          display="flex"
          sx={{
            margin: { xs: 'auto', sm: 'unset' },
            maxWidth: 300,
            width: 1,
          }}
        >
          <img
            width={'100%'}
            height={'100%'}
            src={`${import.meta.env.VITE_BASE_URL}${
              data.attributes.image.data[selectedImg].attributes.url
            }`}
          />
        </Box>

        <Box
          ml={4}
          sx={{
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          <Typography variant="h5" textTransform={'uppercase'} mt={3}>
            {data.attributes.title}
          </Typography>
          <Typography variant="h6" color={'crimson'}>
            {data.attributes.price}$
          </Typography>
          <Typography variant="body1">{data.attributes.description}</Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              my: 2,
              gap: 1,
              flexWrap: 'wrap',
              justifyContent: { xs: 'center', sm: 'unset' },
            }}
          >
            {data.attributes.image.data.map(
              (item: { attributes: { url: string } }, index: number) => {
                return (
                  <img
                    onClick={() => setSelectedImg(index)}
                    width={110}
                    height={110}
                    src={`${import.meta.env.VITE_BASE_URL}${item.attributes.url}`}
                    style={{cursor:"pointer",opacity:index==selectedImg?'1':'.3'}}
                  />
                )
              }
            )}
          </Box>
          <Button
            variant="contained"
            startIcon={<ShoppingCartIcon />}
            sx={{
              mb: 3,
            }}
          >
            Buy Now
          </Button>
        </Box>
      </Stack>
      <Box
        sx={{
          width: 'fit-content',
          ml: 'auto',
          position: 'absolute',
          right: 0,
          top: 10,
        }}
      >
        <CloseIcons close={handleClose} />
      </Box>
    </Dialog>
  )
}

export default ProductDetails
