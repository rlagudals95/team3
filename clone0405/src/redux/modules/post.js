import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from "axios";
import { config } from "../../config";
import moment from "moment";
import "moment/locale/ko";
import { history } from "../configureStore";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const LOADING = "LOADING";
const UPDATE_POST = "UPDATE_POST";

const setPost = createAction(SET_POST, (post_list, paging) => ({
  post_list,
  paging,
}));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));
const updatePost = createAction(UPDATE_POST, (post_idx, msg) => ({
  post_idx,
  msg,
}));

const initialState = {
  is_loading: true,
  list: [],
  paging: { start: null, size: 5 },
  likelist: [],
};

//포스트 가져오기(5개씩)
const getPostDB = (start = null, size = null, token) => { //초기값 start=null size=5(initialState 참고)
  return function (dispatch) {
    const postDB = {
      method: "GET",
      url: `${config.api}/insta/main`,
      headers: {
        authorization: token,
      },
    };
    axios(postDB)
      .then((docs) => {
        let result = docs.data.boardAll.slice(start, size); //모든 게시물 중에 n번 +5개 게시물만 result로 선언
        if (result.length === 0) { //불러온 게시물이 끝났다면 return;
          dispatch(loading(false));
          return;
        }
        let paging = {
          start: start + result.length + 1,
          size: size + 5,
        };
        const likeYn_list = docs.data.likeYn.map((p, idx) => { //포스트ID, 유저고유ID 정리하여 리스트화
          return {
            post_id: p.boardId._id,
            user_id: p.userId,
          };
        });
        result.forEach((doc) => {
          doc.day = moment(new Date(doc.day)).fromNow(); // 시간을 지정된 형식으로 변환 ex) n분 전, n시간 전
          const is_like = likeYn_list.find((a) => {
            if (a.post_id === doc._id && a.user_id === doc.userId._id) { // 두 가지 경우가 true면 is_like에 true를 선언, 아니면 false를 선언
              return true;
            } else {
              return false;
            }
          });
          if (is_like) {
            doc.likeYn = "like"; // is_like가 true 시 likeYn에 좋아요를 누른 유저라고 저장해준다.
          } else {
            doc.likeYn = "unLike"; // 아닐시 unLike
          }
        });
        dispatch(setPost(result, paging));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const addPostDB = (text, item, token) => {
  return function (getState, dispatch, { history }) {
    console.log(text);
    console.log(item);
    console.log(token);
    let formData = new FormData();

    formData.append("contents", text);
    formData.append("boardImg", item);
    // formData.append("authorization", token);
    // const image = getState().image.preview;
    // const user_email = getState().user.email;
    // console.log(contents);

    // console.log(image.data);

    const postDB = {
      url: "http://3.36.111.14/insta/board",
      method: "POST",
      data: formData,
      headers: {
        // headers??????????????????
        authorization: token,
        // Accept: "application/json",
        // "Content-Type": "application/json;charset=UTF-8",
        "Content-Type": "multipart/form-data",
      },
    };
    console.log(postDB);
    axios(postDB)
      .then((res) => {
        let result = {
          contents: text,
          day: moment(new Date()).fromNow(),
          img: item,
          userID: {},
        };
        window.alert("게시물 작성완료!");
        history.replace("/");
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
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(...action.payload.post_list);
        draft.paging = action.payload.paging;
        draft.likelist = action.payload.likelist;
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
      }),
    [UPDATE_POST]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex(
          (p) => p._id === action.payload.post_idx
        );
        draft.list[idx].likeYn = action.payload.msg;
        if (action.payload.msg === "like") {
          draft.list[idx].like = parseInt(draft.list[idx].like) + 1;
        } else {
          draft.list[idx].like = parseInt(draft.list[idx].like) - 1;
        }
      }),
    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.is_loading = action.payload.is_loading;
      }),
  },
  initialState
);

const actionCreators = {
  getPostDB,
  setPost,
  addPostDB,
  updatePost,
};

export { actionCreators };
