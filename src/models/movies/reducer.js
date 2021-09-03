import * as moviesActionTypes from './types';
import { basic_data } from '../../common/samples';

const INITIAL_STATE = basic_data;

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case moviesActionTypes.ADD_MOVIE:
      return {
        list: [...state.list, { title: action.payload, id: action.payload }],
      };
    case moviesActionTypes.REMOVE_MOVIE:
      return {
        list: state.list.filter(
          (movie) => movie.title.toLowerCase() !== action.payload.toLowerCase()
        ),
      };
    default:
      return state;
  }
};
