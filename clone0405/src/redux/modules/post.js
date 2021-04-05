import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from "axios";
import { config } from "../../share/config";
import moment from "moment";
import "moment/locale/ko";

const SET_POST = "SET_POST";
// const ADD_POST = 'ADD_POST';
// const DEL_POST = 'DEL_POST';

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
// const getPost = createAction(GET_POST, (post_list) => ({ post_list }));
// const addPost = createAction(ADD_POST, (post_list) => ({ post_list }));
// const delPost = createAction(DEL_POST, (post_id) => ({ post_id }));

const initialState = {
  list: [],
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

const getPostDB = () => {
  return function (dispatch, getState, { history }) {
    // console.log(moment("2021-04-05 17:08:03").fromNow());
    axios({
      method: "GET",
      url: `${config.api}/post`,
    }).then((docs) => {
      docs.data.forEach((doc) => {
        doc.insert_dt = moment(doc.insert_dt).fromNow();
      });
      dispatch(setPost(docs.data));
    });
  };
};

export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),
  },
  initialState
);

const actionCreators = {
  getPostDB,
  setPost,
};

export { actionCreators };
