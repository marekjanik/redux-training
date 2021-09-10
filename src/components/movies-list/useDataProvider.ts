import { useSelector } from 'react-redux';
import { StoreType } from '../../common/types';
import { selectMoviesList } from '../../models/movies/selectors';

type UseDataProviderType = {
  moviesList: ReturnType<typeof selectMoviesList>;
};

export const useDataProvider = (): UseDataProviderType => {
  const moviesList = useSelector((state: StoreType) => selectMoviesList(state));

  return {
    moviesList,
  };
};
