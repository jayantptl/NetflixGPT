import { options } from "../utils/constansts";
import { MovieContext } from "../context/Context";
import { useEffect, useContext } from "react";

const useNowPlayingHook = () => {
  const { updateMovies } = useContext(MovieContext);
  const getNowPlayingMovies = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
    const data = await fetch(url, options);
    const json = await data.json();
    updateMovies(json.results);
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingHook;
