import * as moviesActionTypes from './types';
import { IdType } from '../../common/types';

export const addMovie = (movieTitle: string, movieId: IdType) => {
  return {
    type: moviesActionTypes.ADD_MOVIE,
    movieTitle,
    movieId,
  };
};

export const removeMovie = (movieTitle: string, movieId?: IdType) => {
  return {
    type: moviesActionTypes.REMOVE_MOVIE,
    movieTitle,
    movieId,
  };
};
