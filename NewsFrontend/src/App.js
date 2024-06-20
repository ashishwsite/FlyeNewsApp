// import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import {BrowserRouter ,Route, Routes} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  
  // const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(3)
  const [refreshKey, setRefreshKey] = useState(0);
  return (
    <BrowserRouter key={refreshKey}>
      <NavBar />
      <LoadingBar height={3} color='#f11946' progress={progress} />
      <div style={{height:'100px'}}></div>
      <Routes>
       <Route path="/" element={<News category="general" setProgress={setProgress} />} /> 
       <Route path="/general" element={<News category="general" setProgress={setProgress} />} /> 
       <Route path="/entertainment" element={<News category="entertainment" setProgress={setProgress} />} /> 
       <Route path="/business" element={<News category="business" setProgress={setProgress} />} /> 
       <Route path="/health" element={<News category="health" setProgress={setProgress} />} /> 
       <Route path="/technology" element={<News category="technology" setProgress={setProgress} />} /> 
       <Route path="/science" element={<News category="science" setProgress={setProgress} />} /> 
       <Route path="/sports" element={<News category="sport" setProgress={setProgress} />} /> 
    </Routes>
    </BrowserRouter >

  )

}

export default App;

