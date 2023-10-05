import React, { useContext } from "react";
import MovieList from "./MovieList";
import { MovieContext } from "../context/Context";

const SecondaryContainer = () => {
  const { movies } = useContext(MovieContext);
  if (!movies) return;
  console.log(movies);
  return (
    <div className="bg-black">
      <div className="-mt-52 pl-7 relative z-20">
        <MovieList title={"Now Playing"} movies={movies} />
        <MovieList title={"Now Playing"} movies={movies} />
        <MovieList title={"Now Playing"} movies={movies} />
        <MovieList title={"Now Playing"} movies={movies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
