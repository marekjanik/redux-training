import { useSelector } from 'react-redux';
import { selectMoviesList } from '../../models/movies/selectors';
import { StoreType } from '../../common/types';

type UseDataProviderType = {
  moviesList: ReturnType<typeof selectMoviesList>;
};

export const useDataProvider = (): UseDataProviderType => {
  const moviesList = useSelector((state: StoreType) => selectMoviesList(state));

  return {
    moviesList,
  };
};
