import React from 'react'
import {
  AppBar,
  Button,
  Container,
  Icon,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import HelpIcon from '@mui/icons-material/Help'

import '/node_modules/flag-icons/css/flag-icons.min.css'

const NavBar = () => {
  return (
    <AppBar elevation={0} sx={{ position: 'relative' }}>
      <Toolbar sx={{ bgcolor: '#003580', justifyContent: 'center' }}>
        <Container
          sx={{
            width: '90%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Typography variant="h2" sx={{ fontSize: '25px' }}>
            Booking.com
          </Typography>
          <Stack flexDirection="row" sx={{ gap: '7px' }}>
            <Button
              variant="outlined"
              size="small"
              sx={{
                color: '#fff',
                border: 0,
                '&:hover': {
                  border: 0,
                  bgcolor: '#0071c2',
                },
              }}>
              PLT
            </Button>
            {/* <Button
              color={'primary'} // 'secondary', 'danger'
              shape={'square'}
              disableRipple
              // seamlessly integrate with "Extended Icon"
              sx={{
                '&:hover': {
                  bgcolor: '#0071c2',
                },
              }}>
              <HelpIcon sx={{ color: '#fff' }} />
            </Button> */}
            <IconButton
              disableRipple
              sx={{
                width: 40,
                height: 40,
                borderRadius: 0,
                borderColor: 'primary.main',
                '&:hover': {
                  bgcolor: '#0071c2',
                },
              }}>
              <HelpIcon sx={{ color: '#fff' }} />
            </IconButton>

            <IconButton
              disableRipple
              sx={{
                width: 40,
                height: 40,
                borderRadius: 0,
                borderColor: 'primary.main',
                '&:hover': {
                  bgcolor: '#0071c2',
                },
              }}>
              <span
                class="fi fi-gb fis"
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '100%',
                }}></span>
            </IconButton>

            <Button
              variant="outlined"
              sx={{
                color: '#fff',
                textTransform: 'capitalize',
                border: '1px solid #fff',
                borderRadius: 0,
                '&:hover': {
                  border: '1px solid #fff',
                  bgcolor: '#0071c2',
                },
              }}>
              List your property
            </Button>
            <Button
              size="small"
              variant="contained"
              sx={{
                color: '#003580',
                bgcolor: '#fff',
                fontWeight: '700',
                textTransform: 'capitalize',
                '&:hover': {
                  color: '#fff',
                  bgcolor: '#0071c2',
                },
              }}>
              Register
            </Button>
            <Button
              variant="contained"
              size="small"
              sx={{
                color: '#003580',
                bgcolor: '#fff',
                fontWeight: '700',
                textTransform: 'capitalize',
                '&:hover': {
                  color: '#fff',
                  bgcolor: '#0071c2',
                },
              }}>
              Login
            </Button>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
