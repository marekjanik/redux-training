import { select, put, call, takeLatest } from "typed-redux-saga";
import { FETCH_MOVIES_LIST_START } from "../types";
import { storeMovies } from "../actions";
import { selectMoviesList } from "../selectors";
import { EndpointsEnum, MethodsEnum } from "../../../common";
import { assertIfAreOfMovieObjectType } from "../../../utils";

function* onFetchMoviesList() {
  const moviesList = yield* select(selectMoviesList);

  const fetchedData = yield* call(() => onFetchOuterData());
  if (!fetchedData) {
    alert(fetchedData);
    return;
  }

  const moviesToBeStored = [...moviesList, ...fetchedData];
  yield* put(storeMovies(moviesToBeStored));
}

function* onFetchOuterData() {
  try {
    const response = yield* call(() =>
      fetch(EndpointsEnum.FETCH_MOVIES_LIST, {
        method: MethodsEnum.GET,
      })
    );
    const data: unknown = yield* call(() => response.json());
    assertIfAreOfMovieObjectType(data);
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      alert(error.message);
      console.log(error.message);
    }
  }
}

export function* onFetchMoviesListStart() {
  yield* takeLatest<typeof FETCH_MOVIES_LIST_START, typeof onFetchMoviesList>(
    FETCH_MOVIES_LIST_START,
    onFetchMoviesList
  );
}
