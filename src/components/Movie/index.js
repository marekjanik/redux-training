import styles from './styles.module.css';

const Movie = (props) => {
  return <li className={styles.movie}>{props.title}</li>;
};

export default Movie;
