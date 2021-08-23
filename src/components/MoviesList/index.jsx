import { useSelector } from 'react-redux';

import Movie from '../Movie';

import styles from './styles.module.css';

const MoviesList = () => {
  const movies = useSelector((state) => state.movies);

  return (
    <section className={styles.movies}>
      <ul>
        {movies.map((movie) => (
          <Movie key={movie.id} title={movie.title} />
        ))}
      </ul>
    </section>
  );
};

export default MoviesList;
