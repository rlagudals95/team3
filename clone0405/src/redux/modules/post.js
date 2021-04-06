import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from "axios";
import { config } from "../../share/config";
import moment from "moment";
import "moment/locale/ko";

const SET_POST = "SET_POST";
// const ADD_POST = 'ADD_POST';
// const DEL_POST = 'DEL_POST';

const setPost = createAction(SET_POST, (post_list, paging) => ({ post_list, paging }));
// const getPost = createAction(GET_POST, (post_list) => ({ post_list }));
// const addPost = createAction(ADD_POST, (post_list) => ({ post_list }));
// const delPost = createAction(DEL_POST, (post_id) => ({ post_id }));

const initialState = {
    list: [],
    paging: { start: null, size: 5 }
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

const getPostDB = (start = null, size = null) => {
    return function (dispatch, getState, { history }) {
        // console.log(moment("2021-04-05 17:08:03").fromNow());
        console.log(start)
        axios({
            method: "GET",
            url: `${config.api}/post`,
        }).then((docs) => {
            let result = docs.data.slice(start, size)
            if (result.length === 0) {
                return;
            }
            let paging = {
                start: parseInt(result[result.length - 1].id),
                size: size + 5,
            }
            console.log(paging)
            result.forEach((doc) => {
                doc.insert_dt = moment(doc.insert_dt).fromNow();
            });
            dispatch(setPost(result, paging));
        });
    };
};

export default handleActions(
    {
        [SET_POST]: (state, action) =>
            produce(state, (draft) => {
                console.log(action.payload.post_list)
                draft.list.push(...action.payload.post_list);
                console.log(action.payload.paging)
                draft.paging = action.payload.paging;
            }),
    },
    initialState
);

const actionCreators = {
    getPostDB,
    setPost,
};

export { actionCreators };
