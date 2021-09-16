import { combineReducers } from 'redux';
import { moviesReducer } from './movies/reducer';

export const rootReducer = combineReducers({
  moviesModel: moviesReducer,
});
