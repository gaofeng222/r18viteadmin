import {
  call,
  put,
  takeEvery,
  takeLatest,
  take,
  select,
} from "redux-saga/effects";

/**
 *
 * @param actions 模拟接口请求
 */
function getUserCount(count) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10 * count);
    }, 3000);
  });
}

function* changAddCount(actions) {
  console.log("🚀 ~ fetchUser ~ actions:", actions);
  const { count } = actions.payload;
  //异步操作
  const res = yield call(getUserCount, count);
  console.log("🚀 ~ function*changCount ~ res:", res);
  //异步操作成功后，更新store
  yield put({ type: "SAGA_COUNT_INCREMENT", payload: { count: res } });
}

function* changDeCount(actions) {
  const { count } = actions.payload;
  //异步操作
  const res = yield call(getUserCount, count);
  console.log("🚀 ~ function*changDeCount ~ res:", res);
  //异步操作成功后，更新store
  yield put({ type: "SAGA_COUNT_DECREMENT", payload: { count: res } });
}

function* rootSaga() {
  yield takeLatest("SAGA_INCREMENT", changAddCount);
  yield takeEvery("SAGA_DECREMENT", changDeCount);
}

export default rootSaga;
