import { useSelector } from 'react-redux';
import {
  selectMoviesList,
  selectMoviesListDescription,
} from '../../models/movies/selectors';
import { StoreType } from '../../common/types';

type UseDataProviderType = {
  moviesList: ReturnType<typeof selectMoviesList>;
  moviesDescription: ReturnType<typeof selectMoviesListDescription>;
  isMovieOfGivenTitleAlreadyOnTheList: (movieTitle: string) => boolean;
};

export const useDataProvider = (): UseDataProviderType => {
  const moviesList = useSelector((state: StoreType) => selectMoviesList(state));

  const moviesDescription = useSelector((state: StoreType) =>
    selectMoviesListDescription(state)
  );

  const isMovieOfGivenTitleAlreadyOnTheList = (movieTitle: string) => {
    return (
      moviesList.findIndex(
        ({ title }) => title.toLowerCase() === movieTitle.toLowerCase()
      ) >= 0
    );
  };

  return {
    moviesList,
    moviesDescription,
    isMovieOfGivenTitleAlreadyOnTheList,
  };
};
