import axios from "axios";
import React, { useState } from "react";

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const [favorites, setFavorites] = useState([]); // Added state for favorites

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${searchQuery}&apikey=d8900e85`
      );
      console.log(response);
      setMovies(response.data.Search);
    } catch (error) {
      console.log("Error in Fetching the API ", error);
    }
  };

  const handleOnClick = async (movie) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/favourite/movie",
        movie
      );
      console.log(response);

      // Only add the clicked movie to the favorites list
      setFavorites((prevFavorites) => [...prevFavorites, movie]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container py-4">
      <form className="d-flex" onSubmit={handleSubmit}>
        <input
          type="search"
          value={searchQuery}
          className="form-control me-2"
          aria-label="Search"
          placeholder="Search movies..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
        {movies.map((movie) => (
          <div className="col" key={movie.imdbID}>
            <div className="card h-100">
              <img src={movie.Poster} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text">
                  Release Year: {movie.Year} <br />
                  Type: {movie.Type} <br />
                  IMDB: {movie.imdbID}
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleOnClick(movie)}
                >
                  Add to Favorites
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
