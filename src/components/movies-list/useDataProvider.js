import { useSelector } from 'react-redux';

export const useDataProvider = () => {
  const moviesList = useSelector((state) => state.moviesModel.list);

  return {
    moviesList,
  };
};
