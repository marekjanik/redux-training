import produce from 'immer';
import * as moviesActionTypes from './types';
import { basic_data } from '../../common/samples';

const INITIAL_STATE = basic_data;

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case moviesActionTypes.ADD_MOVIE:
      return produce(state, (draft) => {
        draft.list.push({ title: action.title, id: action.id });
      });
    case moviesActionTypes.REMOVE_MOVIE:
      return produce(state, (draft) => {
        draft.list = draft.list.filter(
          (movie) => movie.title.toLowerCase() !== action.title.toLowerCase()
        );
      });
    default:
      return state;
  }
};
