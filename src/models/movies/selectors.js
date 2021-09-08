import { createSelector } from 'reselect';

const moviesModel = (store) => store.moviesModel;

export const selectMoviesListDescription = createSelector(
  moviesModel,
  (moviesModelState) => moviesModelState.description
);

export const selectMoviesList = createSelector(
  moviesModel,
  (moviesModelState) => moviesModelState.list
);
