import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Author from './components/Author/Author';
import Header from './components/layout/Header/Header';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Author/>
        <div className="content">
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/about" element={<HomePage/>}/>
            </Routes>
        </div>
      </div>
    </div>
  )
}

export default App;
