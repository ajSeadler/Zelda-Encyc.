// src/components/GameDetail.js

import React from 'react';
import './GameDetail.css'; // Import the CSS file

function GameDetail({ game }) {
  return (
    <div className="game-detail"> {/* Add the game-detail class */}
      <h2>{game.name}</h2>
      <p>{game.description}</p>
      <p>Developer: {game.developer}</p>
      <p>Publisher: {game.publisher}</p>
      <p>Released Date: {game.released_date}</p>
      <div className="back-button"> {/* Add the back-button class */}
        <a href="/games">Back to Games</a>
      </div>
    </div>
  );
}

export default GameDetail;
