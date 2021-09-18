import { all, call, delay, put, takeEvery } from "@redux-saga/core/effects";
import { hideLoading, showLoading } from "react-redux-loading-bar";
import { postService } from "../../services";
import subjectAction from "./actions";

function* getAllPost() {
  yield put(showLoading);
  try {
    const result = yield call(postService.getPost);
    if (result.success === true) {
      yield delay(1000);
      yield put(subjectAction.getAllPostSuccess(result.posts));
      yield put(hideLoading);
    }
  } catch (error) {
    yield delay(1000);
    yield put(hideLoading);
    console.log(error);
  }
}

function* addPost(data) {
  yield put(showLoading);
  try {
    const result = yield call(postService.addNewPost, data.payload);
    if (result.success === true) {
      yield delay(1000);
      yield put(subjectAction.addNewPostSuccess(result.data));
      yield put(hideLoading);
    }
  } catch (error) {
    yield delay(1000);
    yield put(hideLoading);
    console.log(error);
  }
}

export default function* rootSaga() {
  yield all([takeEvery(subjectAction.GET_ALL_POST, getAllPost)]);
  yield all([takeEvery(subjectAction.ADD_NEW_POST, addPost)]);
}
