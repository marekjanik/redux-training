import { useSelector } from 'react-redux';
import { selectMoviesList } from '../../models/movies/selectors';

export const useDataProvider = () => {
  const moviesList = useSelector((state) => selectMoviesList(state));

  return {
    moviesList,
  };
};
