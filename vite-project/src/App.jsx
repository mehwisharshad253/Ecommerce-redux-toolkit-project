import React from 'react'
import Headers from './components/Headers'
import Home from './components/Home'
import CartDetails from './components/CartDetails';
import toast, { Toaster } from 'react-hot-toast';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Headers/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<CartDetails/>} />
      </Routes>
      <Toaster />
      </BrowserRouter>
    </>
  )
}

export default App
