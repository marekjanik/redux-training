import { MoviesModelStateType } from './types';
import { uuid } from '../utils/uuid';

export const basic_data: MoviesModelStateType = {
  description: 'Favourite movies list',
  list: [
    {
      id: uuid(),
      title: 'Billy Elliot',
      director: 'Stephen Daldry',
      premiere_date: 2000,
    },
    {
      id: uuid(),
      title: 'Supernova',
      director: 'Harry Macqueen',
      premiere_date: 2020,
    },
    {
      id: uuid(),
      title: 'The Blind Side',
      director: 'John Lee Hancock',
      premiere_date: 2009,
    },
    {
      id: uuid(),
      title: 'Interstellar',
      director: 'Christopher Nolan',
      premiere_date: 2014,
    },
    {
      id: uuid(),
      title: 'Spirited Away',
      director: 'Hayao Miyazaki',
      premiere_date: 2001,
    },
  ],
};
