import React, { useContext, useEffect, useState } from 'react'
import {BrowserRouter} from 'react-router-dom'
import './App.scss'
import AppRouter from './components/AppRouter'
import Navbar from './components/navbar/Navbar'
import Wrapper from './components/wrapper/Wrapper'
import Footer from './components/footer/Footer'

const App = () => {
   
  return (
    <BrowserRouter>
      <Navbar />
      <Wrapper >
        <AppRouter />
      </Wrapper>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
