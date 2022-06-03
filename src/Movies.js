import React from "react";
import moviesData from "./moviesData";
import { Link } from "react-router-dom";

const Movies = () => {
  const movies = moviesData.map(movie => {
    return (
      <div key={movie.id}>
        <h3>
         {movie.title}
        </h3>
        
        <Link to={`/detail/${movie.id}`}> <img src={movie.PosterURL} width="100" height="100"/></Link>
        <p>{movie.description}</p>
        <p>{movie.rating}</p>
        <hr />
      </div>
    );
  });

  return (
    <>
     
      {movies}
    </>
  );
};

export default Movies;
