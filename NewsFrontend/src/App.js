// import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import {BrowserRouter ,Route, Routes} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Foote from './components/Foote';

const App = () => {
  
  // const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(3)
  const [refreshKey, setRefreshKey] = useState(0);
  return (
    <BrowserRouter key={refreshKey}>
      <NavBar />
      <LoadingBar height={3} color='#f11946' progress={progress} />
      <div style={{height:'100px'}}></div>
      <Routes> <Route path="/" element={<News category="general" setProgress={setProgress} />} /> </Routes>
      <Routes> <Route path="/general" element={<News category="general" setProgress={setProgress} />} /> </Routes>
      <Routes> <Route path="/entertainment" element={<News category="entertainment" setProgress={setProgress} />} /> </Routes>
      <Routes> <Route path="/business" element={<News category="business" setProgress={setProgress} />} /> </Routes>
      <Routes> <Route path="/health" element={<News category="health" setProgress={setProgress} />} /> </Routes>
      <Routes> <Route path="/technology" element={<News category="technology" setProgress={setProgress} />} /> </Routes>
      <Routes> <Route path="/science" element={<News category="science" setProgress={setProgress} />} /> </Routes>
      <Routes> <Route path="/sports" element={<News category="sport" setProgress={setProgress} />} /> </Routes>
      {/* <Foote/> */}
    </BrowserRouter >

  )

}

export default App;

