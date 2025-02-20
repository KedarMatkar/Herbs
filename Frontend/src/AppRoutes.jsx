import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Classify from './pages/Classify'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/identify-plant" element={<Classify />}/>
    </Routes>
  )
}

export default AppRoutes;