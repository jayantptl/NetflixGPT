import React from "react";
import { imgCDN } from "../utils/constansts";

const MovieCard = ({ poster_path }) => {
  return (
    <div className="w-48 pr-4">
      <img className="w-50" src={imgCDN + poster_path} alt="movie-card" />
    </div>
  );
};

export default MovieCard;
