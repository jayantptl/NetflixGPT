import { MovieContext } from "./Context";
import { useState } from "react";

const MovieState = (props) => {
  const [movies, setMovies] = useState(null);
  const [trailerId, setTrailerId] = useState(null);

  const updateMovies = (newMovies) => {
    setMovies(newMovies);
  };

  return (
    <MovieContext.Provider value={{ movies, updateMovies ,setTrailerId,trailerId }}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
