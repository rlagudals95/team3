import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from "axios";
import { config } from "../../share/config";
import moment from "moment";
import "moment/locale/ko";

const SET_POST = "SET_POST";
const LOADING = 'LOADING';

const setPost = createAction(SET_POST, (post_list, paging) => ({ post_list, paging }));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

const initialState = {
    list: [],
    paging: { start: null, size: 5 },
    is_loading: false,
};

const getPostDB = (start = null, size = null) => {
    return function (dispatch, getState, { history }) {
        if (start === null) {
            dispatch(loading(true));
        }
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
                draft.is_loading = false;
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
};

export { actionCreators };
