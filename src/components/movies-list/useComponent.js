import { useDataProvider } from './useDataProvider';

export const useComponent = () => {
  const { moviesList } = useDataProvider();

  return {
    moviesList,
  };
};
