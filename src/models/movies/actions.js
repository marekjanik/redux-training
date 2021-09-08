import * as moviesActionTypes from './types';
import { uuid } from '../../utils/uuid';

export const addMovie = (newMovieTitle) => {
  return {
    type: moviesActionTypes.ADD_MOVIE,
    title: newMovieTitle,
    id: uuid(),
  };
};

export const removeMovie = (movieTitle) => {
  return {
    type: moviesActionTypes.REMOVE_MOVIE,
    title: movieTitle,
  };
};
