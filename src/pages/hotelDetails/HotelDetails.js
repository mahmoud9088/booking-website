import React from 'react'
import { useParams } from 'react-router-dom'

const HotelDetails = () => {
  const { id } = useParams()
  console.log(id)
  return <div>hotel: {id}</div>
}

export default HotelDetails
