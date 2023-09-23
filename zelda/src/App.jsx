// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GameList from './components/GamesList';
import GameDetailPage from './components/GameDetailsPage';

function App() {
  return (
    
      <Routes>
        
        <Route path="/" element={<GameList />} />
        <Route path="/games/:id" element={<GameDetailPage />} />
      </Routes>
    
  );
}
 
export default App;
