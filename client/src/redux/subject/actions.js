const subjectAction = {
  ADD_NEW_POST: "ADD_NEW_POST",
  ADD_NEW_POST_SUCCESS: "ADD_NEW_POST_SUCCESS",
  ADD_NEW_POST_FAIL: "ADD_NEW_POST_FAIL",

  GET_ALL_POST: "GET_ALL_POST",
  GET_ALL_POST_SUCCESS: "GET_ALL_POST_SUCCESS",
  GET_ALL_POST_FAIL: "GET_ALL_POST_FAIL",

  addNewPost: (data) => ({
    type: subjectAction.ADD_NEW_POST,
    payload: data,
  }),

  addNewPostSuccess: (result) => ({
    type: subjectAction.ADD_NEW_POST,
    payload: result,
  }),

  addNewPostFail: (result) => ({
    type: subjectAction.ADD_NEW_POST,
    payload: result,
  }),

  getAllPost: () => ({
    type: subjectAction.GET_ALL_POST,
  }),

  getAllPostSuccess: (result) => ({
    type: subjectAction.GET_ALL_POST_SUCCESS,
    payload: result,
  }),

  getAllPostFail: (result) => ({
    type: subjectAction.GET_ALL_POST_FAIL,
    payload: result,
  }),
};

export default subjectAction;
