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
  list: [],
  paging: { start: null, size: 5 },
  likelist: [],
};

//글 작성
// const addPostDB = (user_id, post_img, post_contents) => {
//     return function (dispatch, getState, { history }) {
//         axios({
//             method: 'post',
//             url: `${config.api}/post`,
//             data: {
//                 insert_dt: insert_dt,
//                 user_id: user_id,
//                 user_img: user_img,
//                 post_img: post_img,
//                 post_contents, post_contents,
//             },
//         }).then((res) => {
//             history.push('/');
//         }).catch((err) => {
//             console.log('에러', err);
//         });
//     };
// };

const getPostDB = (start = null, size = null, token) => {
  return function (dispatch, getState, { history }) {
    // console.log(moment("2021-04-05 17:08:03").fromNow());
    const postDB = {
      method: "GET",
      url: `${config.api}/insta/main`,
      headers: {
        authorization: token,
      },
    };
    axios(postDB)
      .then((docs) => {
        let result = docs.data.boardAll.slice(start, size);
        if (result.length === 0) {
          return;
        }
        let paging = {
          start: start + result.length + 1,
          size: size + 5,
        };
        const likeYn_list = docs.data.likeYn.map((p, idx) => {
          return {
            post_id: p.boardId._id,
            user_id: p.userId,
          };
        });
        result.forEach((doc) => {
          doc.day = moment(new Date(doc.day)).fromNow();

          const is_like = likeYn_list.find((a) => {
            if (a.post_id === doc._id && a.user_id === doc.userId._id) {
              return true;
            } else {
              return false;
            }
          });
          if (is_like) {
            doc.likeYn = "like";
          } else {
            doc.likeYn = "unLike";
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
