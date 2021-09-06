import { createSelector } from 'reselect';

const moviesModel = (state) => state.moviesModel;

export const selectMoviesListDescription = createSelector(
  moviesModel,
  (moviesModelState) => moviesModelState.description
);

export const selectMoviesList = createSelector(
  moviesModel,
  (moviesModelState) => moviesModelState.list
);
