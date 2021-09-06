import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie, removeMovie } from '../../models/movies/actions';

export const useDataPersister = () => {
  const dispatch = useDispatch();

  const addMovieToList = useCallback(
    (newMovieTitle) => {
      dispatch(addMovie(newMovieTitle));
    },
    [dispatch]
  );

  const removeMovieFromList = useCallback(
    (movieTitle) => {
      dispatch(removeMovie(movieTitle));
    },
    [dispatch]
  );

  return {
    addMovieToList,
    removeMovieFromList,
  };
};
