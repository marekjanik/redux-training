import React from 'react';
import './App.css';
import MoviesForm from '../movies-form';
import MoviesList from '../movies-list';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <MoviesForm />
      <MoviesList />
    </React.Fragment>
  );
};

export default App;
