import axios from "axios";
import React, { useEffect, useState } from "react";

export const Favourites = () => {
  const [fav, setFav] = useState([]);

  const favouriteList = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/favourite/receive"
      );
      setFav(response.data); // Accessing the 'data' property from the response
    } catch (error) {
      console.log("Error fetching favorites:", error);
    }
  };

  useEffect(() => {
    favouriteList();
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
      {fav.map((movie) => (
        <div className="col" key={movie.imdbID}>
          <div className="card h-100">
            <img src={movie.POSTER} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{movie.TITLE}</h5>
              <p className="card-text">
                Release Year : {movie.YEAR} <br /> Type : {movie.TYPE} <br />{" "}
                IMDB : {movie.imdbID}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
