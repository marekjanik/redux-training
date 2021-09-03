import * as moviesActionTypes from './types';

export const addMovie = (newMovieTitle) => {
  return {
    type: moviesActionTypes.ADD_MOVIE,
    payload: newMovieTitle,
  };
};

export const removeMovie = (movieTitle) => {
  return {
    type: moviesActionTypes.REMOVE_MOVIE,
    payload: movieTitle,
  };
};
