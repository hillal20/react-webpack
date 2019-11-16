import { takeEvery, put, select, call, fork, all } from "redux-saga/effects";

import { watchSecond, watchThird } from "./anotherSaga";
import { watchActionOne } from "./sagas";

export function* rootSaga() {
  yield all([fork(watchActionOne), fork(watchThird), fork(watchSecond)]);
}
