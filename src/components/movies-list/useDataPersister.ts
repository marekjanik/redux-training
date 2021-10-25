import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { fetchMoviesListStart } from "../../models/movies/actions";
import { DispatchType } from "../../common/types";

type UseDataPersisterType = () => {
  fetchMoviesList: typeof fetchMoviesListStart;
};

export const useDataPersister: UseDataPersisterType = () => {
  const dispatch =
    useDispatch<DispatchType<ReturnType<typeof fetchMoviesListStart>>>();

  const fetchMoviesList = useCallback<typeof fetchMoviesListStart>(
    () => dispatch(fetchMoviesListStart()),
    [dispatch]
  );

  return {
    fetchMoviesList,
  };
};
