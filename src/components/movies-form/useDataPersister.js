import { useDispatch } from 'react-redux';
import { addMovie, removeMovie } from '../../models/movies/actions';

export const useDataPersister = () => {
  const dispatch = useDispatch();

  const addMovieToList = (newMovieTitle) => {
    dispatch(addMovie(newMovieTitle));
  };

  const removeMovieFromList = (movieTitle) => {
    dispatch(removeMovie(movieTitle));
  };

  return {
    addMovieToList,
    removeMovieFromList,
  };
};
