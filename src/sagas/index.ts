import { all } from "redux-saga/effects";

import authSaga from "./authSaga";
import locationSaga from "./locationSaga";
import productSaga from "./productSaga";

export default function* rootSaga() {
  yield all([...authSaga, ...locationSaga, ...productSaga]);
}
