import {
  Box,
  Button,
  Container,
  InputBase,
  TextField,
  MenuItem,
  InputAdornment,
  Typography,
  Divider,
  FormControl,
  InputLabel,
  Select,
  Modal,
  FormHelperText,
  Stack,
  IconButton,
} from '@mui/material'
import React, { useState } from 'react'
import BedIcon from '@mui/icons-material/Bed'
import PersonIcon from '@mui/icons-material/Person'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import DateRangeIcon from '@mui/icons-material/DateRange'

import { DateRange } from 'react-date-range'
import { format } from 'date-fns'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
]

const HeroBannerSearch = () => {
  const [currency, setCurrency] = React.useState('EUR')
  const [adultsCount, setAdultsCount] = useState(2)
  const [childrenCount, setChildrenCount] = useState(4)
  const [roomsCount, setRoomsCount] = useState(0)

  const [open, setOpen] = useState(false)
  const [openDateRange, setOpenDateRange] = useState(false)

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ])

  const handleOpen = () => setOpen(!open)
  const handleClose = () => setOpen(false)

  const handleChange = (event) => {
    setCurrency(event.target.value)
  }
  return (
    <>
      <Container
        sx={{
          position: 'absolute',
          left: '50%',
          bottom: '0',
          transform: 'translate(-50%,50%)',
          width: '1025.63px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          bgcolor: '#fff',
          padding: '0px !important',
          border: '2px solid #febb02',
        }}>
        <InputBase
          startAdornment={<BedIcon sx={{ marginRight: '10px' }} />}
          placeholder="where you wanna go?"
          sx={{
            height: '100% !important',
            padding: '10px 5px',
            flexGrow: 1,
          }}
        />
        <Divider
          orientation="vertical"
          color="#FDA228"
          sx={{ height: 55.97, width: '2px' }}
        />
        {/* <TextField
          type="date"
          sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
            flexGrow: 1,
          }}
        /> */}
        <Button
          variant="outlined"
          disableRipple
          onClick={() => setOpenDateRange(!openDateRange)}
          sx={{
            position: 'relative',
            border: 0,
            color: '#000',
            textTransform: 'capitalize',
            '&:hover': {
              border: 0,
              bgcolor: 'transparent',
            },
          }}
          startIcon={<DateRangeIcon sx={{ marginRight: '10px' }} />}>
          {`${format(state[0].startDate, 'MM/dd/yyyy')}` ===
          `${format(state[0].endDate, 'MM/dd/yyyy')}`
            ? 'Check-In'
            : `${format(state[0].startDate, 'MM/dd/yyyy')}`}{' '}
          -{' '}
          {`${format(state[0].startDate, 'MM/dd/yyyy')}` ===
          `${format(state[0].endDate, 'MM/dd/yyyy')}`
            ? 'Check-Out'
            : `${format(state[0].endDate, 'MM/dd/yyyy')}`}
        </Button>
        <Box
          sx={{
            display: openDateRange ? 'flex' : 'none',
            position: 'absolute',
            top: '65px',
            left: '40%',
            bgcolor: '#fff',
            // border: '1px solid gray',
            padding: '10px',
            boxShadow: '0 0 10px gray',
          }}>
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
          />
        </Box>

        <Divider
          orientation="vertical"
          color="#FDA228"
          sx={{ height: 55.97, width: '2px' }}
        />
        <Button
          variant="outlined"
          disableRipple
          onClick={handleOpen}
          sx={{
            position: 'relative',
            border: 0,
            color: '#000',
            textTransform: 'capitalize',
            '&:hover': {
              border: 0,
              bgcolor: 'transparent',
            },
          }}
          startIcon={<PersonIcon sx={{ marginRight: '10px' }} />}
          endIcon={<UnfoldMoreIcon />}>
          {adultsCount} adult{adultsCount > 1 ? 's' : null} . {childrenCount}{' '}
          child{childrenCount > 1 ? 'ren' : null} . {roomsCount} room
          {roomsCount > 1 ? 's' : null}
          {/* <Modal
          open={open}
          onClose={handleClose}
          hideBackdrop={true}
          sx={{
            width: '286.04px',
            height: '50px',
            bgcolor: 'red',
            // top: ',
            // left: '61%',
            position: 'relative',
          }}>
          <Box>hi</Box>
        </Modal> */}
        </Button>
        <Stack
          sx={{
            display: open ? 'flex' : 'none',
            position: 'absolute',
            top: '65px',
            left: '63%',
            height: 'auto',
            width: '270px',
            bgcolor: '#fff',
            // border: '1px solid gray',
            padding: '10px',
            boxShadow: '0 0 10px gray',
          }}>
          <Stack
            flexDirection="row"
            sx={{
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 5px',
            }}>
            <Typography variant="h6">adults</Typography>
            <Stack
              flexDirection="row"
              sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '50%',
              }}>
              <IconButton
                sx={{
                  width: '30px',
                  height: '30px',
                  border: '1px solid #003580',
                  borderRadius: '0',
                }}
                disabled={adultsCount === 0 ? true : false}
                onClick={() =>
                  adultsCount > 0 ? setAdultsCount(adultsCount - 1) : null
                }>
                <RemoveIcon sx={{ color: '#003580' }} />
              </IconButton>
              <Typography>{adultsCount}</Typography>
              <IconButton
                sx={{
                  width: '30px',
                  height: '30px',
                  border: '1px solid #003580',
                  borderRadius: '0',
                }}
                onClick={() => setAdultsCount(adultsCount + 1)}>
                <AddIcon sx={{ color: '#003580' }} />
              </IconButton>
            </Stack>
          </Stack>
          <Divider orientation="horizontal" />
          <Stack
            flexDirection="row"
            sx={{
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 5px',
            }}>
            <Stack>
              <Typography variant="h6">children</Typography>
              <Typography sx={{ fontSize: '12px' }}>Ages 0 - 17</Typography>
            </Stack>
            <Stack
              flexDirection="row"
              sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '50%',
              }}>
              <IconButton
                size="small"
                sx={{
                  width: '30px',
                  height: '30px',
                  border: '1px solid #003580',
                  borderRadius: '0',
                }}
                disabled={childrenCount === 0 ? true : false}
                onClick={() =>
                  childrenCount > 0 ? setChildrenCount(childrenCount - 1) : null
                }>
                <RemoveIcon sx={{ color: '#003580' }} />
              </IconButton>
              <Typography>{childrenCount}</Typography>
              <IconButton
                sx={{
                  width: '30px',
                  height: '30px',
                  border: '1px solid #003580',
                  borderRadius: '0',
                }}
                onClick={() => setChildrenCount(childrenCount + 1)}>
                <AddIcon sx={{ color: '#003580' }} />
              </IconButton>
            </Stack>
          </Stack>
          <Divider orientation="horizontal" />
          <Stack
            flexDirection="row"
            sx={{
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 5px',
            }}>
            <Typography variant="h6">rooms</Typography>

            <Stack
              flexDirection="row"
              sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '50%',
              }}>
              <IconButton
                sx={{
                  width: '30px',
                  height: '30px',
                  border: '1px solid #003580',
                  borderRadius: '0',
                }}
                disabled={roomsCount === 0 ? true : false}
                onClick={() =>
                  roomsCount > 0 ? setRoomsCount(roomsCount - 1) : null
                }>
                <RemoveIcon sx={{ color: '#003580' }} />
              </IconButton>
              <Typography>{roomsCount}</Typography>
              <IconButton
                sx={{
                  width: '30px',
                  height: '30px',
                  border: '1px solid #003580',
                  borderRadius: '0',
                }}
                onClick={() => setRoomsCount(roomsCount + 1)}>
                <AddIcon sx={{ color: '#003580' }} />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
        {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select value={adultsCount} onChange={handleChange}>
          <MenuItem value={adultsCount}>
            <Stack flexDirection={'row'}>
              <Typography>adults</Typography>
              <Stack>
                <IconButton></IconButton>
                <Typography>{adultsCount}</Typography>
                <IconButton></IconButton>
              </Stack>
            </Stack> 
          </MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl> */}
        {/* <TextField
        variant="outlined"
        sx={{
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          flexGrow: 1,
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonIcon sx={{ marginRight: '10px' }} />
              <Typography>
                {adultsCount} adult{adultsCount > 1 ? 's' : null} .{' '}
                {childrenCount} child{childrenCount > 1 ? 'ren' : null} .{' '}
                {roomsCount} room{roomsCount > 1 ? 's' : null}
              </Typography>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <UnfoldMoreIcon />
            </InputAdornment>
          ),
        }}
      /> */}
        <Divider
          orientation="vertical"
          color="#FDA228"
          sx={{ height: 55.97, width: '2px' }}
        />
        <Button variant="contained" sx={{ height: 55.97, borderRadius: 0 }}>
          Search
        </Button>
      </Container>
    </>
  )
}

export default HeroBannerSearch
