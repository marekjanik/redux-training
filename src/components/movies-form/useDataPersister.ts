import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie, removeMovie } from '../../models/movies/actions';
import { DispatchType } from '../../common/types';

type UseDataPersisterType = {
  addMovieToList: typeof addMovie;
  removeMovieFromList: typeof removeMovie;
};

export const useDataPersister = (): UseDataPersisterType => {
  const dispatch =
    useDispatch<
      DispatchType<ReturnType<typeof addMovie | typeof removeMovie>>
    >();

  const addMovieToList = useCallback<typeof addMovie>(
    (movieTitle, movieId) => dispatch(addMovie(movieTitle, movieId)),
    [dispatch]
  );

  const removeMovieFromList = useCallback<typeof removeMovie>(
    (movieTitle) => dispatch(removeMovie(movieTitle)),
    [dispatch]
  );

  return {
    addMovieToList,
    removeMovieFromList,
  };
};
