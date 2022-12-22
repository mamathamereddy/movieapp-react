import React, { useEffect, useState } from "react";
import "./App.css";

import SearchIcon from "./search.svg";
import MovieCard from "./components/MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=74a8767f";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [serchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Avengers");
  }, []);

  return (
    <div className="app">
      <h1>Movie Land</h1>

      <div className="search">
        <input
          placeholder="search for a movie"
          value={serchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="serach"
          onClick={() => searchMovies(serchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
