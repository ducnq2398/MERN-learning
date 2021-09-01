import { all, takeEvery, put, call, delay } from "redux-saga/effects";
import { userHelper } from "../../helpers";
import actions from "./actions";
import { authenticationService } from "../../services";
import { showLoading, hideLoading } from "react-redux-loading-bar";

function* login({ payload }) {
  yield put(showLoading());
  try {
    const result = yield call(authenticationService.getUserLoginInfo, payload);
    if (result.success === true) {
      yield delay(1000);
      yield put(actions.loginSuccess(result.accessToken));
      userHelper.showSuccessMessage("Login successfully");
      yield put(hideLoading());
    }
  } catch (error) {
    yield delay(1000);
    yield put(hideLoading());
    userHelper.showErrorMessage(error.message);
  }
}

export default function* rootSaga() {
  yield all([takeEvery(actions.LOGIN, login)]);
}
