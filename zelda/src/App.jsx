// src/App.js

import React from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import GameList from './components/GamesList';
import GameDetailPage from './components/GameDetailsPage';
import "./index.css"
import "./app.css"

function HomePage() {
  const navigate = useNavigate(); // Get the navigate function

  const handleShowGames = () => {
    // Redirect to the games page when the button is clicked
    navigate('/games');
  };

  return (
    <div>
      <h1>The Legend of Zelda</h1>
      <button className="show-games-button" onClick={handleShowGames}>
  <span>Show Games</span>
</button>
<button className="show-games-button-1" onClick={handleShowGames}>
  <span>Characters</span>
</button>
<button className="show-games-button-2" onClick={handleShowGames}>
  <span>Dungeons</span>
</button>
  </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/games" element={<GameList />} />
      <Route path="/games/:id" element={<GameDetailPage />} />
    </Routes>
  );
}

export default App;
