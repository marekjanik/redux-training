import { useSelector } from 'react-redux';
import {
  selectMoviesList,
  selectMoviesListDescription,
} from '../../models/movies/selectors';

export const useDataProvider = () => {
  const moviesList = useSelector((state) => selectMoviesList(state));

  const moviesDescription = useSelector((state) =>
    selectMoviesListDescription(state)
  );

  const isMovieOfGivenTitleAlreadyOnTheList = (newMovieTitle) => {
    return (
      moviesList.findIndex(
        ({ title }) => title.toLowerCase() === newMovieTitle.toLowerCase()
      ) >= 0
    );
  };

  return {
    moviesDescription,
    isMovieOfGivenTitleAlreadyOnTheList,
  };
};
