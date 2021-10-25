import { all, call } from "typed-redux-saga";
import { onAddMovieStart } from "./onAddMovieStart";
import { onRemoveMovieStart } from "./onRemoveMovieStart";
import { onFetchMoviesListStart } from "./onFetchMoviesListStart";

export function* moviesSagas() {
  yield* all([
    call(onAddMovieStart),
    call(onRemoveMovieStart),
    call(onFetchMoviesListStart),
  ]);
}
