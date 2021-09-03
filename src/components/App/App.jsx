import React from 'react';

import MoviesForm from '../movies-form';
import MoviesList from '../movies-list';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <MoviesForm />
      <MoviesList />
    </React.Fragment>
  );
}

export default App;
