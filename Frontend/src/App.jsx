// import { useState } from 'react'
// import './App.css'
import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Header from "./components/Header";
import AppRoutes from "./AppRoutes"

function App() {
  return (
    <Router>
      <Header />
      <AppRoutes />
    </Router>
  );
}

export default App;
