// src/components/CharacterList.js

import React, { useState, useEffect } from 'react';

function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // Fetch the list of characters from your API
    fetch('https://zelda.fanapis.com/api/characters')
      .then((response) => response.json())
      .then((data) => setCharacters(data.data));
  }, []);

  return (
    <div className="character-list">
      <h2>List of Zelda Characters</h2>
      <ul>
        {characters.map((character) => (
          <li key={character._id}>
            <h3>{character.name}</h3>
            <p>{character.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterList;
