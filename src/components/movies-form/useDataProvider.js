import { useSelector } from 'react-redux';

export const useDataProvider = () => {
  const moviesList = useSelector((state) => state.moviesModel.list);

  const moviesDescription = useSelector(
    (state) => state.moviesModel.description
  );

  const isMovieOfGivenTitleAlreadyOnTheList = (newMovieTitle) => {
    return (
      moviesList.findIndex(
        ({ title }) => title.toLowerCase() === newMovieTitle.toLowerCase()
      ) >= 0
    );
  };

  return {
    moviesList,
    moviesDescription,
    isMovieOfGivenTitleAlreadyOnTheList,
  };
};
