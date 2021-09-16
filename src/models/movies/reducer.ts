import * as moviesActionTypes from './types';
import { MoviesModelActionType } from './actions';
import { ReducerType, MoviesModelStateType } from '../../common/types';
import { basic_data } from '../../common/samples';
import { produce } from '../../utils/immer';

const INITIAL_STATE = basic_data;

export const moviesReducer: ReducerType<
  MoviesModelStateType,
  MoviesModelActionType
> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case moviesActionTypes.ADD_MOVIE:
      return produce(state, (draft) => {
        draft.list.push({ title: action.movieTitle, id: action.movieId });
      });
    case moviesActionTypes.REMOVE_MOVIE:
      return produce(state, (draft) => {
        draft.list = draft.list.filter(
          (movie) =>
            movie.title.toLowerCase() !== action.movieTitle.toLowerCase()
        );
      });
    default:
      return produce(state, () => {});
  }
};
