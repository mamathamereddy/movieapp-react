import React, { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
//key: 74a8767f

const API_URL = "http://www.omdbapi.com?apikey=74a8767f";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>Movie Land</h1>

      <div className="search">
        <input placeholder="serch for a movie" value="" onChange={() => {}} />
        <img src={SearchIcon} alt="serach" onClick={() => {}} />
      </div>
    </div>
  );
};

export default App;
