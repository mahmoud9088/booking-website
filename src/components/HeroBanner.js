import { Container, Stack, Typography } from '@mui/material'
import React from 'react'
import HeroBannerSearch from './HeroBannerSearch'

const HeroBanner = () => {
  return (
    <Stack
      sx={{
        width: '100vw',
        height: '220px',
        bgcolor: '#003580',
        padding: '5px 0',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}>
      <Container
        sx={{
          width: '1074.45px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: '20px',
        }}>
        <Typography variant="h3" sx={{ color: '#fff' }}>
          Find your next stay
        </Typography>
        <Typography variant="h6" sx={{ color: '#fff' }}>
          Search low prices on hotels, homes and much more...
        </Typography>
      </Container>
      <HeroBannerSearch />
    </Stack>
  )
}

export default HeroBanner
