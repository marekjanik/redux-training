import React from 'react';
import { useComponent } from './useComponent';
import styles from './styles.module.css';

const MoviesList = () => {
  const { moviesList } = useComponent();

  return (
    <section className={styles.moviesListContainer}>
      <ul className={styles.moviesList}>{renderMoviesList(moviesList)}</ul>
    </section>
  );
};

const renderMoviesList = (moviesList) => {
  return moviesList.map((movie) => (
    <li key={movie.id} className={styles.movie}>
      {movie.title}
    </li>
  ));
};

export default MoviesList;
