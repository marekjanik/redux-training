import { select, put, takeLatest } from "typed-redux-saga";
import { ADD_MOVIE_START } from "../types";
import { addMovieStart, storeMovies } from "../actions";
import { selectMoviesList } from "../selectors";
import { ErrorsEnum, MovieObjectType } from "../../../common/index";
import { produce, uuid } from "../../../utils";

type actionType = ReturnType<typeof addMovieStart>;

function* onAddMovie({ movieTitle }: actionType) {
  const moviesList = produce(yield* select(selectMoviesList), (draft) => draft);

  const isMovieOfGivenTitleAlreadyOnTheList =
    moviesList.findIndex(
      ({ title }) => title.toLowerCase() === movieTitle.toLowerCase()
    ) >= 0;

  if (isMovieOfGivenTitleAlreadyOnTheList) {
    alert(ErrorsEnum.add_present_element);
    return;
  }

  const newMovie: MovieObjectType = {
    id: uuid(),
    title: movieTitle,
  };

  const moviesToBeStored = [...moviesList, newMovie];

  yield* put(storeMovies(moviesToBeStored));
}

export function* onAddMovieStart() {
  yield* takeLatest<typeof ADD_MOVIE_START, typeof onAddMovie>(
    ADD_MOVIE_START,
    onAddMovie
  );
}
