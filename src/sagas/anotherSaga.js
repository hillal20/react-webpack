import { takeEvery, put, select, call, fork, all } from "redux-saga/effects";

export function* watchThird() {
  yield put({ type: "THIRD_ACTION" });
}

const sayHello = () => {
  console.log(" ====> hello");
};

const sayGoodBy = () => {
  console.log(" ====> goodBy");
};

const sayGoodByForEver = () => {
  console.log(" ====> goodBy for ever ");
};
export function* watchSecond() {
  yield put({ type: "SECOND_ACTION" });
  yield all([call(sayHello), call(sayGoodBy)]);
  yield all([fork(sayGoodByForEver)]);
}
