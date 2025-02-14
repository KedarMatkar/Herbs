// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import React from "react";
import HeroSection from "./components/HeroSection";
import HerbCard from "./components/HerbCard";
import Weather from "./components/Weather";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <HerbCard/>
      <Weather />
    </>
  );
}

export default App;
