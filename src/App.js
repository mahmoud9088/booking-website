import React from 'react'
import { Routes, Route } from 'react-router-dom'
import GlobalStyle from './globalStyles/GlobalStyles'
import Home from './pages/home/Home'
import HotelDetails from './pages/hotelDetails/HotelDetails'
import Hotels from './pages/hotels/Hotels'
const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotels/:id" element={<HotelDetails />} />
      </Routes>
    </div>
  )
}

export default App

/*
1. create your react app
2. install react-router-dom 
3. create three pages one for home page with path '/' 
and the second one for hotels with path '/hotels'
and the third one for hotal details with path '/hotels/:id'
4. create routes for each of them using react-router-dom
5.



*/
