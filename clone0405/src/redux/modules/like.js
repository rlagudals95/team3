import { handleActions } from "redux-actions";
import axios from "axios";
import "moment";
import "moment/locale/ko";
import { actionCreators as postActions } from "./post"
import { config } from "../../config";

const initialState = {
    is_loading: false,
    is_like: false,
};


//좋아요 클릭 시 실행 (포스트 고유ID와 개인토큰 필요)
const sendLikeDB = (boardId = null, token) => {
    return function (dispatch, getState, { history }) {
        if (!boardId || !token) {
            return;
        }
        const likeDB = {
            url: `${config.api}/insta/board/like`,
            method: "post",
            data: {
                boardId: boardId,
            },
            headers: {
                authorization: token,
            },
        };
        axios(likeDB)
            .then((result) => {
                let likeChkDB = result.data.message; //결과값 like, unLike
                dispatch(postActions.updatePost(boardId, likeChkDB)); // 포스트ID와 결과값 dispatch
            })
            .catch((err) => {
                console.log(err)
            })
    }
}



export default handleActions(
    {
    },
    initialState
);

const actionCreators = {
    sendLikeDB,
};

export { actionCreators };