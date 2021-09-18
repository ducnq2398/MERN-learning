import actions from "./actions";

const initState = {
  posts: [],
  post: null,
  loading: false,
};

export default function postReducers(state = initState, action) {
  switch (action.type) {
    case actions.GET_ALL_POST:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_ALL_POST_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case actions.GET_ALL_POST_FAIL:
      return {
        ...state,
        loading: false,
      };

    case actions.ADD_NEW_POST:
      return {
        ...state,
        loading: true,
      };

    case actions.ADD_NEW_POST_SUCCESS:
      const listPost = [...state.posts, action.payload];

      return {
        ...state,
        posts: listPost,
        loading: false,
      };

    case actions.ADD_NEW_POST_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
