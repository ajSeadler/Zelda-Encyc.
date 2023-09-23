// src/components/GameList.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function GameList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('https://zelda.fanapis.com/api/games')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Check if the 'data' property exists and is an array
        if (Array.isArray(data.data)) {
          // Sort the games by released_date in ascending order (oldest first)
          const sortedGames = data.data.sort(
            (a, b) => new Date(a.released_date) - new Date(b.released_date)
          );
          setGames(sortedGames);
        } else {
          console.error('API did not return an array of games:', data);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='games'>
      <h1>Zelda Games</h1>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <Link to={`/games/${game.id}`}>
              <h2>{game.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameList;
