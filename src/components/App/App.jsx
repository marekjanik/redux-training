import React from 'react';
import './App.css';
import MoviesForm from '../movies-form';
import MoviesList from '../movies-list';

function App() {
  return (
    <React.Fragment>
      <MoviesForm />
      <MoviesList />
    </React.Fragment>
  );
}

export default App;
