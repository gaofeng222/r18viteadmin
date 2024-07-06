import { put, take } from 'redux-saga/effects'

// function* logger(action) {
//   const state = yield select();

//   console.log("action", action);
//   console.log("state after", state);
// }

// function* watchAndLog() {
//   yield takeEvery("*", logger);
// }

// function* watchAndLog() {
//   while (true) {
//     const action = yield take("*");
//     console.log("🚀 ~ function*watchAndLog ~ action:", action);
//     const state = yield select();
//     console.log("🚀 ~ function*watchAndLog ~ state:", state);
//   }
// }

function* watchFirstThreeTodosCreation() {
  let actions
  for (let i = 0; i < 3; i++) {
    actions = yield take('TODO_CREATED')
    console.log('🚀 ~ function*watchFirstThreeTodosCreation ~ action:', actions)
  }
  yield put({ type: 'SHOW_CONGRATULATION', action: actions.payload })
}

export default watchFirstThreeTodosCreation
