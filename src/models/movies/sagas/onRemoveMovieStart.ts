import { select, put, takeLatest } from "typed-redux-saga";
import { REMOVE_MOVIE_START } from "../types";
import { removeMovieStart, storeMovies } from "../actions";
import { selectMoviesList } from "../selectors";
import { ErrorsEnum } from "../../../common/index";
import { produce } from "../../../utils";

type actionType = ReturnType<typeof removeMovieStart>;

function* onRemoveMovie({ movieTitle }: actionType) {
  const moviesList = produce(yield* select(selectMoviesList), (draft) => draft);

  const isMovieOfGivenTitleAlreadyOnTheList =
    moviesList.findIndex(
      ({ title }) => title.toLowerCase() === movieTitle.toLowerCase()
    ) >= 0;

  if (!isMovieOfGivenTitleAlreadyOnTheList) {
    alert(ErrorsEnum.remove_absent_element);
    return;
  }

  const moviesToBeStored = moviesList.filter(({ title }) => {
    return title.toLowerCase() !== movieTitle.toLowerCase();
  });

  yield* put(storeMovies(moviesToBeStored));
}

export function* onRemoveMovieStart() {
  yield* takeLatest<typeof REMOVE_MOVIE_START, typeof onRemoveMovie>(
    REMOVE_MOVIE_START,
    onRemoveMovie
  );
}
