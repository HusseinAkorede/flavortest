import { useState, useEffect } from 'react'
import { BodyWarpper } from './constants/Styles/BodyWrapper'
import { Footer, Navbar } from './components'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages';

function App() {


  return (
      <BodyWarpper>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
    </Routes>
    </BodyWarpper>
  )
}

export default App