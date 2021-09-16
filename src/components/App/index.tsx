import React from 'react';
import './styles.css';
import styles from './styles.module.css';
import { MoviesForm, MoviesList } from '../index';

export const App: React.FC = () => {
  return (
    <div className={styles.appContainer}>
      <MoviesForm />
      <MoviesList />
    </div>
  );
};
