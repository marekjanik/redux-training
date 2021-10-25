import { useEffect } from "react";
import { useDataProvider } from "./useDataProvider";
import { useDataPersister } from "./useDataPersister";
import { MovieObjectType } from "../../common/types";

type UseComponentType = {
  moviesList: MovieObjectType[];
};

export const useComponent = (): UseComponentType => {
  const { moviesList } = useDataProvider();
  const { fetchMoviesList } = useDataPersister();

  useEffect(() => {
    fetchMoviesList();
  }, [fetchMoviesList]);

  return {
    moviesList,
  };
};
