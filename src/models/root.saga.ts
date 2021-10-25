import { all, call } from "typed-redux-saga";
import { moviesSagas } from "./movies/sagas";

export function* rootSaga() {
  yield all([call(moviesSagas)]);
}
