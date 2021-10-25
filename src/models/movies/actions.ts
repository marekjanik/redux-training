import * as moviesActionTypes from "./types";
import { MovieObjectType } from "../../common/types";

export const addMovieStart = (movieTitle: string) => {
  return <const>{
    type: moviesActionTypes.ADD_MOVIE_START,
    movieTitle,
  };
};

export const removeMovieStart = (movieTitle: string) => {
  return <const>{
    type: moviesActionTypes.REMOVE_MOVIE_START,
    movieTitle,
  };
};

export const fetchMoviesListStart = () => {
  return <const>{
    type: moviesActionTypes.FETCH_MOVIES_LIST_START,
  };
};

export const storeMovies = (moviesToBeStored: MovieObjectType[]) =>
  <const>{
    type: moviesActionTypes.STORE_MOVIES,
    moviesToBeStored,
  };

export type MoviesModelActionType = ReturnType<
  | typeof addMovieStart
  | typeof removeMovieStart
  | typeof fetchMoviesListStart
  | typeof storeMovies
>;
