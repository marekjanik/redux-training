import React from 'react';
import { useComponent } from './useComponent';
import styles from './styles.module.css';
import { MovieObjectType } from '../../common/types';

export const MoviesList: React.FC = () => {
  const { moviesList } = useComponent();

  return (
    <section className={styles.moviesListContainer}>
      <ul className={styles.moviesList}>{renderMoviesList(moviesList)}</ul>
    </section>
  );
};

const renderMoviesList = (moviesList: MovieObjectType[]) => {
  return moviesList.map((movie) => (
    <li key={movie.id} className={styles.movie}>
      {movie.title}
    </li>
  ));
};
