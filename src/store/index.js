import { createStore } from 'redux';

const initialState = {
  movies: [],
  title: '',
};

export const ACTIONS = {
  ADD_MOVIE: 'ADD_MOVIE',
  REMOVE_MOVIE: 'REMOVE_MOVIE',
  SET_TITLE: 'SET_TITLE',
};

export const ERRORS = {
  PLEASE_ENTER_A_TITLE: 'Please enter a title.',
  THERE_IS_NO_MOVIE_TO_REMOVE: 'There is no movie to remove.',
};

const movieReducer = (state = initialState, action) => {
  if (action.type === ACTIONS.ADD_MOVIE && action.payload !== '') {
    return {
      movies: [
        ...state.movies,
        { title: action.payload, id: Math.random().toString() },
      ],
      title: state.title,
    };
  } else if (action.type === ACTIONS.ADD_MOVIE && action.payload === '') {
    alert(ERRORS.PLEASE_ENTER_A_TITLE);
  }

  if (action.type === ACTIONS.REMOVE_MOVIE && action.payload !== '') {
    return {
      movies: state.movies.filter((movie) => movie.title !== action.payload),
      title: state.title,
    };
  } else if (
    action.type === ACTIONS.REMOVE_MOVIE &&
    state.movies.length === 0
  ) {
    alert(ERRORS.THERE_IS_NO_MOVIE_TO_REMOVE);
  } else if (action.type === ACTIONS.REMOVE_MOVIE && action.payload === '') {
    alert(ERRORS.PLEASE_ENTER_A_TITLE);
  }

  if (action.type === ACTIONS.SET_TITLE) {
    return {
      title: action.payload,
      movies: state.movies,
    };
  }

  return state;
};

const store = createStore(movieReducer);

export default store;
