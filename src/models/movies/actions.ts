import * as moviesActionTypes from './types';
import { IdType } from '../../common/types';

export const addMovie = (movieTitle: string, movieId: IdType) => {
  return <const>{
    type: moviesActionTypes.ADD_MOVIE,
    movieTitle,
    movieId,
  };
};

export const removeMovie = (movieTitle: string) => {
  return <const>{
    type: moviesActionTypes.REMOVE_MOVIE,
    movieTitle,
  };
};

export type MoviesModelActionType = ReturnType<
  typeof addMovie | typeof removeMovie
>;
