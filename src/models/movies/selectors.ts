import { createSelector } from 'reselect';
import { StoreType } from '../../common/types';

const moviesModel = (store: StoreType) => store.moviesModel;

export const selectMoviesListDescription = createSelector(
  moviesModel,
  (moviesModelState) => moviesModelState.description
);

export const selectMoviesList = createSelector(
  moviesModel,
  (moviesModelState) => moviesModelState.list
);
