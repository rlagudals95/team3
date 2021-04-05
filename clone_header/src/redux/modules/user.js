import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from "axios";
import { setCookie, deleteCookie } from "../../share/Cookie";
import { apikey } from "../../share/apikey";

//액션타입

const SET_USER = "SET_USER";
const GET_USER = "GET_USER";
const LOG_OUT = "LOG_OUT";

//액션
const setUser = createAction(SET_USER, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));

const initialState = {
  user: null,
  is_login: false,
  user_name: null,
  nickname: null,
};

//미들웨어

//회원가입
const SignupDB = (user_email, nickname, user_name, password) => {
  return function (getState, dispatch, { history }) {
    window.alert("연결됨!");
    axios({
      method: "post",
      url: `${apikey.api}/insta/register`,

      data: {
        email: user_email,
        user_name: user_name,
        password: password,
        nickname: nickname,
      },
    })
      .then(() => {
        dispatch(
          setUser({
            user_name: user_name,
            nickname: nickname,
            email: user_email,
          })
        );

        history.push("/login");
      })
      .catch((e) => {
        window.alert("회원가입 에러", e);
        console.log("회원가입 에러:", e);
      });
  };
};

//로그인

const LoginDB = (user_email, password) => {
  return function (getState, dispatch, { history }) {
    axios({
      method: "post",
      url: `${apikey.api}/api/login`,
      data: {
        email: user_email,
        password: password,
      },
    })
      .then((res) => {
        dispatch(
          setUser({
            user_email: user_email,
          })
        );
        history.push("/");
      })
      .catch((e) => {
        window.alert("로그인 에러", e);
        console.log("로그인 에러", e);
      });
  };
};

//로그아웃
const logoutDB = () => {
  return function (dispatch) {
    dispatch(logOut());
  };
};

//리듀서

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "login success");
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [GET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
      }),
  },
  initialState
);

export const actionsCreators = {
  SignupDB,
  LoginDB,
  logoutDB,
  getUser,
};
