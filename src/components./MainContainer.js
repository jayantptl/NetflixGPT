import React, { useContext } from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { MovieContext } from "../context/Context";

const MainContainer = () => {
  const { movies } = useContext(MovieContext);
  if (!movies) return;

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
