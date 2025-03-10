import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Classify from './pages/Classify'
import AddHerb from './pages/AddHerb'
import HerbDetail from './components/HerbDetail'
import SearchResults from './components/SearchResults'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/identify-plant" element={<Classify />}/>
      <Route path="/add-herb" element={<AddHerb/>}/>;
      <Route path="/herb/:id" element={<HerbDetail />} />
      <Route path="/search-results" element={<SearchResults />} />
    </Routes>
  )
}

export default AppRoutes;