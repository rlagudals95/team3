import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from "axios";
import { config } from "../../config";
import moment from "moment";
import "moment/locale/ko";

const ADD_POST = "ADD_POST";
const LOADING = "LOADING";

const addPost = createAction(ADD_POST, (post) => ({ post }));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

const initialState = {
  list: [],
  is_loading: false,
};

//게시글 하나에 필수로 들어가야할 값들

const initialPost = {
  image: "",
  contents: "",
};

const addPostDB = (contents = "") => {
  return function (getState, dispatch, { history }) {
    const user_email = getState().user.email;
    const postDB = {
      url: "apikey",
      method: "POST",
      data: {
        email: user_email,
        file: "",
        contents: contents,
      },
    };
    axios(postDB)
      .then((res) => {
        console.log(res);
        window.alert("게시물 작성완료!");
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          window.alert(error.response.data.errorMessage);
        }
      });
  };
};

export default handleActions(
  {
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
      }),
  },
  initialState
);

export const actionCreators = {
  addPostDB,
};
