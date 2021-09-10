import { useDataProvider } from './useDataProvider';
import { MovieObjectType } from '../../common/types';

type UseComponentType = {
  moviesList: MovieObjectType[];
};

export const useComponent = (): UseComponentType => {
  const { moviesList } = useDataProvider();

  return {
    moviesList,
  };
};
