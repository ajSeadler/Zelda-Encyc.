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
        if (Array.isArray(data.data)) {
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
    <div className="container">
      <h1>The Legend of Zelda</h1>
      <ul className="game-list">
        {games.map((game) => (
          <li key={game.id} className="game-item">
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
