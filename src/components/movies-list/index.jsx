import React from 'react';
import { useDataProvider } from './useDataProvider';
import styles from './styles.module.css';

const renderMoviesList = (moviesList) => {
  return moviesList.map((movie) => (
    <li key={movie.id} className={styles.movie}>
      {movie.title}
    </li>
  ));
};

const MoviesList = () => {
  const { moviesList } = useDataProvider();

  return (
    <section className={styles.moviesListContainer}>
      <ul className={styles.moviesList}>{renderMoviesList(moviesList)}</ul>
    </section>
  );
};

export default MoviesList;
