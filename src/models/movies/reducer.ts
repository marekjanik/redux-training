import * as moviesActionTypes from './types';
import produce from '../../utils/immer';
import { basic_data } from '../../common/samples';
import {
  ReducerType,
  MoviesModelStateType,
  MoviesModelActionType,
} from '../../common/types';

const INITIAL_STATE = basic_data;

export const reducer: ReducerType<MoviesModelStateType, MoviesModelActionType> =
  (state = INITIAL_STATE, action) => {
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
