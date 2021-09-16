import { useSelector } from 'react-redux';
import {
  selectMoviesList,
  selectMoviesListDescription,
  selectIfMovieOfGivenTitleIsAlreadyOnTheList,
} from '../../models/movies/selectors';
import { StoreType } from '../../common/types';

type UseDataProviderType = {
  moviesList: ReturnType<typeof selectMoviesList>;
  moviesDescription: ReturnType<typeof selectMoviesListDescription>;
  isMovieOfGivenTitleAlreadyOnTheList: ReturnType<
    ReturnType<typeof selectIfMovieOfGivenTitleIsAlreadyOnTheList>
  >;
};

export const useDataProvider = (movieTitle: string): UseDataProviderType => {
  const moviesList = useSelector((state: StoreType) => selectMoviesList(state));

  const moviesDescription = useSelector((state: StoreType) =>
    selectMoviesListDescription(state)
  );

  const isMovieOfGivenTitleAlreadyOnTheList = useSelector((state: StoreType) =>
    selectIfMovieOfGivenTitleIsAlreadyOnTheList(movieTitle)(state)
  );

  return {
    moviesList,
    moviesDescription,
    isMovieOfGivenTitleAlreadyOnTheList,
  };
};
