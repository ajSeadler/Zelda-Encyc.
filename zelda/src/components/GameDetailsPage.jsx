// src/components/GameDetailPage.js

import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function GameDetailPage() {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    fetch(`https://zelda.fanapis.com/api/games/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          setGame(data.data);
        } else {
          console.error('API did not return a successful response:', data);
        }
      })
      .catch((error) => {
        console.error('Error fetching game details:', error);
      });
  }, [id]);

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <div className="game-detail-page"> {/* Add the game-detail-page class */}
      <h2>{game.name}</h2>
      <p>{game.description}</p>
      <p>Developer: {game.developer}</p>
      <p>Publisher: {game.publisher}</p>
      <p>Released Date: {game.released_date}</p>
      <div className="back-button"> {/* Add the back-button class */}
        <Link to="/games">Back to Games</Link>
      </div>
    </div>
  );
}

export default GameDetailPage;
