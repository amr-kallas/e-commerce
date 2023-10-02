import {
  Box,
  Container,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
} from '@mui/material'
import React, { useState } from 'react'
import CardProduct from './Card'
import {  useSearchParams } from 'react-router-dom'

const filterButton = [
  {
    title: 'All Products',
    filter:'All'
  },
  {
    title: 'Men Category',
    filter:'man'
  },
  {
    title: 'Women Category',
    filter:'women'
  },
]

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [alignment, setAlignment] = useState(searchParams.get("filters[category][$eq]")==null?"All":searchParams.get("filters[category][$eq]"))
  const theme = useTheme()
  const handleChange = (_event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    if(newAlignment!=null){
    searchParams.set('filters[category][$eq]', newAlignment);
      setSearchParams(newAlignment=="All"?'':searchParams);
    console.log(searchParams.get("filters[category][$eq]"))
    setAlignment(newAlignment)
    }
  }

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: 3,
          flexWrap: 'wrap',
        }}
      >
        <Stack maxWidth={300}>
          <Typography variant="h6" fontWeight="bold">
            Selected Products
          </Typography>
          <Typography>
            All our new arrivals in a exclucive brand selection
          </Typography>
        </Stack>
        <Stack
          direction="row"
          sx={{
            '@media(max-width:800px)': {
              width: 1,
              justifyContent: 'center',
              mt: 3,
            },
          }}
        >
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            sx={{
              gap: 2,
            }}
          >
            {filterButton.map((item) => (
              <ToggleButton
                key={item.title}
                sx={{
                  height: 'fit-content',
                  textTransform: 'capitalize',
                  border: '1px solid rgba(255, 255, 255, 0.12) !important',
                  borderRadius: '8px !important',
                  fontSize: '16px !important',
                  color: theme.palette.text.primary,
                }}
                value={item.filter}
              >
                {item.title}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Stack>
      </Box>
      <CardProduct />
    </Container>
  )
}

export default Products
