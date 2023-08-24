import axios from "axios";
import React, { useEffect, useState } from "react";

export const List = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?s=ALL&apikey=d8900e85`
        );
        setMovies(response.data.Search);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {movies.map((movie) => (
          <div className="col" key={movie.imdbID}>
            <div className="card h-50">
              <img
                src={movie.Poster}
                className="card-img-top"
                alt="Movie Poster"
              />
              <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text">{movie.Type}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
