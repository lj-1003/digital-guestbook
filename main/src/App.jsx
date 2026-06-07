import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Compose from './pages/Compose'


function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compose" element={<Compose />} />
        </Routes>
    </BrowserRouter>
  )
}
export default App
