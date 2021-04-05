import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { setCookie, deleteCookie } from '../../shared/Cookie';
import axios from 'axios';
import { config } from '../../config';

const SET_POST = 'SET_POST';
const GET_POST = 'GET_POST';
const ADD_POST = 'ADD_POST';
const DEL_POST = 'DEL_POST';

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const getPost = createAction(GET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post_list) => ({ post_list }));
const delPost = createAction(DEL_POST, (post_id) => ({ post_id }));

const initialPost = {

}

//글 작성
const addPostDB = (user_id, post_img, post_desc) => {
    return function (dispatch, getState, { history }) {
        axios({
            method: 'post',
            url: /add/post,
            data: {
                user_id: user_id,
                post_img: post_img,
                post_desc, post_desc,
            },
        }).then((res) => {
            history.push('/');
        }).catch((err) => {
            console.log('에러', err);
        });
    };
};

const getPostDB = ()