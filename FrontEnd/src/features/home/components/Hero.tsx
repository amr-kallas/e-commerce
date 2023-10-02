import { Box, Container, Link, Stack, Typography } from '@mui/material'
import banner1 from '../../../assest/banner-17.jpg'
import banner2 from '../../../assest/banner-16.jpg'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined'
import Slider from './Slider'
const Hero = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        AlignItems: 'center',
        gap: '12px',
        mt: 3,
        height: '443px',
      }}
    >
      <Box flex={1}>
        <Slider />
      </Box>
      <Stack
        sx={{
          display: { xs: 'none', md: 'flex' },
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${banner1})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            width: '300px',
            height: '237px',
          }}
        >
          <Box
            sx={{
              maxWidth: 145,
              mt: '40px',
              mx: '20px',
            }}
          >
            <Typography variant="h5" textTransform="capitalize" color="#283445">
              New Arrivals
            </Typography>
            <Typography variant="h5" textTransform="capitalize" color="#283445">
              Summer Sale 20% Off
            </Typography>
            <Link
              sx={{
                textDecoration: 'none',
                color: '#283445',
                display: 'flex',
                alignItems: 'center',
                mt: 1,
                cursor: 'pointer',
              }}
            >
              Shop Now
              <KeyboardArrowRightOutlinedIcon />
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundImage: `url(${banner2})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            width: '300px',
            height: '218px',
          }}
        >
          <Box
            sx={{
              maxWidth: 145,
              mt: '40px',
              mx: '20px',
            }}
          >
            <Typography variant="h5" textTransform="capitalize" color="#283445">
              Gaming 4K
            </Typography>
            <Typography variant="h5" textTransform="capitalize" color="#283445">
              Desktop & Laptops
            </Typography>
            <Link
              sx={{
                textDecoration: 'none',
                color: '#283445',
                display: 'flex',
                alignItems: 'center',
                mt: 1,
                cursor: 'pointer',
              }}
            >
              Shop Now
              <KeyboardArrowRightOutlinedIcon />
            </Link>
          </Box>
        </Box>
      </Stack>
    </Container>
  )
}

export default Hero
