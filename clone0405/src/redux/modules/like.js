import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import "moment";
import "moment/locale/ko";
import moment from "moment";
import { history } from "../configureStore";
import { actionCreators as postActions } from "./post"

const SET_LIKE = "SET_LIKE";
const ADD_LIKE = "ADD_LIKE";
const DEL_LIKE = "DEL_LIKE";
const LIKE_CHECK = "LIKE_CHECK";

const addLike = createAction(ADD_LIKE, (boardId, like_list) => ({ boardId, like_list }));
const likeChk = createAction(LIKE_CHECK, (likeChk) => ({ likeChk }));

const initialState = {
    is_loading: false,
    is_like: false,
};


const sendLikeDB = (boardId = null, token) => {
    return function (dispatch, getState, { history }) {
        if (!boardId) {
            return;
        }
        console.log("123")

        const likeDB = {
            url: "http://3.36.111.14/insta/board/like",
            method: "post",
            data: {
                boardId: boardId,
            },
            headers: {
                authorization: token,
            },
        };
        console.log(likeDB)
        axios(likeDB)
            .then((result) => {
                let likeChkDB = result.data.message;
                console.log(likeChkDB)
                dispatch(postActions.updatePost(boardId, likeChkDB));
                // dispatch(likeChk(likeChkDB));
            })
            .catch((err) => {
                console.log(err)
            })
    }
}



export default handleActions(
    {
        [ADD_LIKE]: (state, action) =>
            produce(state, (draft) => {
                draft.likelist[action.payload.post_id] = action.payload.like_list;
            }),
        [SET_LIKE]: (state, action) =>
            produce(state, (draft) => {
                draft.likelist[action.payload.post_id] = action.payload.like_list;
            }),
        [DEL_LIKE]: (state, action) =>
            produce(state, (draft) => {
                draft.likelist[action.payload.post_id] = {};
            }),
        [LIKE_CHECK]: (state, action) =>
            produce(state, (draft) => {
                draft.is_like = action.payload.likeChk;
            })
    },
    initialState
);

const actionCreators = {
    sendLikeDB,
    // delLikeDB,
    // getLikeDB,
    // setLike,
};

export { actionCreators };