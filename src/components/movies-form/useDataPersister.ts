import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addMovieStart, removeMovieStart } from "../../models/movies/actions";
import { DispatchType } from "../../common/types";

type UseDataPersisterType = {
  addMovie: typeof addMovieStart;
  removeMovie: typeof removeMovieStart;
};

export const useDataPersister = (): UseDataPersisterType => {
  const dispatch =
    useDispatch<
      DispatchType<ReturnType<typeof addMovieStart | typeof removeMovieStart>>
    >();

  const addMovie = useCallback<typeof addMovieStart>(
    (movieTitle) => dispatch(addMovieStart(movieTitle)),
    [dispatch]
  );

  const removeMovie = useCallback<typeof removeMovieStart>(
    (movieTitle) => dispatch(removeMovieStart(movieTitle)),
    [dispatch]
  );

  return {
    addMovie,
    removeMovie,
  };
};
