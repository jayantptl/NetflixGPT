import { useContext, useEffect } from "react";
import { options } from "../utils/constansts";
import { MovieContext } from "../context/Context";

const useMovieTrailer = (movieId) => {
  const { setTrailerId } = useContext(MovieContext);

  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
  const getMovieData = async () => {
    const data = await fetch(url, options);
    const json = await data.json();
    const filterData = json.results.filter((video) => {
      return video.type === "Trailer";
    });
    const trailer = filterData.length ? filterData[0] : json.results[0];
    setTrailerId(trailer.key);
  };

  useEffect(() => {
    getMovieData();
  });
};

export default useMovieTrailer;
