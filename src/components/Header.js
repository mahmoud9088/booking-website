import { Box, Button, Container, Stack, Tabs } from '@mui/material'
import React, { useState } from 'react'
import HotelIcon from '@mui/icons-material/Hotel'
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import AttractionsIcon from '@mui/icons-material/Attractions'
import { styled } from '@mui/system'

const StyledButton = styled(Button)({
  color: '#fff',
  borderRadius: '40px',
  '&:hover': {
    backgroundColor: '#0071c2',
  },
})

const Header = () => {
  const [activeBooking, setActiveBooking] = useState('Stays')
  return (
    <Stack
      sx={{
        width: '100vw',
        bgcolor: '#003580',
        padding: '5px 0',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Container
        sx={{
          width: '1074.45px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '20px',
        }}>
        <StyledButton
          onClick={() => setActiveBooking('Stays')}
          sx={{
            border: activeBooking === 'Stays' ? '1px solid #fff' : null,
          }}
          startIcon={<HotelIcon sx={{ color: '#fff' }} />}>
          Stays
        </StyledButton>
        <StyledButton
          onClick={() => setActiveBooking('Flights')}
          sx={{
            border: activeBooking === 'Flights' ? '1px solid #fff' : null,
          }}
          startIcon={<AirplaneTicketIcon sx={{ color: '#fff' }} />}>
          Flights
        </StyledButton>
        <StyledButton
          onClick={() => setActiveBooking('Car rentals')}
          sx={{
            border: activeBooking === 'Car rentals' ? '1px solid #fff' : null,
          }}
          startIcon={<DirectionsCarIcon sx={{ color: '#fff' }} />}>
          Car rentals
        </StyledButton>
        <StyledButton
          onClick={() => setActiveBooking('Attractions')}
          sx={{
            border: activeBooking === 'Attractions' ? '1px solid #fff' : null,
          }}
          startIcon={<AttractionsIcon sx={{ color: '#fff' }} />}>
          Attractions
        </StyledButton>
        <StyledButton
          onClick={() => setActiveBooking('Airport taxes')}
          sx={{
            border: activeBooking === 'Airport taxes' ? '1px solid #fff' : null,
          }}
          startIcon={
            <svg
              class="bk-icon -streamline-taxi_sign"
              height="24"
              width="24"
              fill="#fff"
              viewBox="0 0 24 24"
              role="presentation"
              aria-hidden="true"
              focusable="false">
              <path d="M21.75 15.5V8a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0zm-16.5 0V8a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0zM3 8.75h3a.75.75 0 0 0 0-1.5H3a.75.75 0 0 0 0 1.5zm6.75 6.75v-6a.75.75 0 0 1 1.5 0v6a.75.75 0 0 0 1.5 0v-6a2.25 2.25 0 0 0-4.5 0v6a.75.75 0 0 0 1.5 0zM9 13.25h3a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5zm5.304-4.971l3 7.5a.75.75 0 0 0 1.392-.557l-3-7.5a.75.75 0 0 0-1.392.557zm3-.558l-3 7.5a.75.75 0 0 0 1.392.557l3-7.5a.75.75 0 0 0-1.392-.557zM.75 5h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5zm0 15h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5z"></path>
            </svg>
          }>
          Airport taxes
        </StyledButton>
      </Container>
    </Stack>
  )
}

export default Header
