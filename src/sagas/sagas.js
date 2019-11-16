import { takeEvery, put, select, call } from "redux-saga/effects";

const getX = state => {
  return state.firstReducer.x;
};

const fn = y => {
  console.log("y ==>", y);
};

function* actionOneFn() {
  yield put({
    type: "ACTION_ONE_ASYNC",
    payload: {}
  });

  const x = yield select(getX);
  console.log("x ===> ", x);

  yield call(fn, "hello");
}

export function* watchActionOne() {
  yield takeEvery("ACTION_ONE", actionOneFn);
}
