export type { Reducer as ReducerType, Dispatch as DispatchType } from 'redux';

export type IdType = string;

export type MovieObjectType = {
  id: IdType;
  title: string;
  director?: string;
  premiere_date?: number;
};

export type MoviesModelStateType = {
  description: string;
  list: MovieObjectType[];
};

export type MoviesModelActionType = {
  type: string;
  movieTitle: string;
  movieId: IdType;
};

export type StoreType = {
  moviesModel: MoviesModelStateType;
};
