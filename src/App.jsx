import React from 'react'
import Index from './components/Index'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Alquiler from './components/Alquiler/Alquiler.jsx'


function App() {

  return (
    <BrowserRouter >
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/alquiler" element={<Alquiler />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App

