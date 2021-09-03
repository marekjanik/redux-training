import { combineReducers } from 'redux';
import { reducer as moviesReducer } from './movies/reducer';

export const rootReducer = combineReducers({
  moviesModel: moviesReducer,
});
