import React from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import GameList from "./components/GamesList";
import GameDetailPage from "./components/GameDetailsPage";
import "./index.css";
import "./app.css";

function HomePage() {
  const navigate = useNavigate(); // Get the navigate function

  const handleShowGames = () => {
    // Redirect to the games page when the button is clicked
    navigate("/games");
  };

  return (
    <>
  <h1>THE LEGEND OF ZELDA FANCYCLOPEDIA</h1>

    <div className="center-container"> {/* Wrap everything in a centering container */}
      <div id="triforce">
        <div id="triangle" className="shadow">
          <div id="shadow"></div>
        </div>
      </div>
      <div className="button-container">
    <button className="show-games-button" onClick={handleShowGames}>
      <span>Games</span>
    </button>
    <button className="show-games-button-1" onClick={handleShowGames}>
      <span>Characters</span>
    </button>
    <button className="show-games-button-2" onClick={handleShowGames}>
      <span>Dungeons</span>
    </button>
  </div>
    </div>
    </>
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
