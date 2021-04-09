import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from "axios";
import { setCookie, deleteCookie } from "../../share/Cookie";
import { apikey } from "../../share/apikey";
import { history } from "../configureStore";

//회원가입 로그인 기능은 필요한 정보를 서버로 넘겨주기만 하면된다

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
};

//미들웨어

// 로그인 체크
// 로그인 체크는 화면이 렌더링 될 때마다 토큰을 보내주어 유저가 지금 사이트에 접속해 있는지 판단해준다
const loginCheck = (local_info, token) => {
  return function (dispatch) {
    if (local_info) {
      // 로컬 스토리지에 토큰이 있다면
      const options = {
        url: "http://3.36.111.14/insta/check",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
          token: token,
        },
      };
      axios(options)
        .then((response) => {
          dispatch(setUser(response.data));
        })
        .catch((error) => {
          if (error.response) {
            window.alert(error.response.data.errorMessage);
          }
        });
    } else {
      dispatch(logOutSV());
    }
  };
};

// 로그아웃
const logOutSV = (history) => {
  return function (dispatch) {
    localStorage.removeItem("token");
    dispatch(logOut());

    dispatch(setUser());
  };
};

//회원가입
const SignupDB = (email, nickName, userName, password, passwordChk) => {
  return function (getState, dispatch, { history }) {
    window.alert("연결됨!");
    axios({
      method: "post",
      url: "http://3.36.111.14/insta/register",

      data: {
        email: email,
        nickName: nickName,
        userName: userName,
        password: password,
        passwordChk: passwordChk,
      },
    })
      .then((user) => {
        dispatch(
          setUser({
            userName: userName,
            nickName: nickName,
            email: email,
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

const LoginDB = (email, password) => {
  return function (getState, dispatch, { history }) {
    axios({
      method: "post",
      url: "http://3.36.111.14/insta/login",
      data: {
        email: email,
        password: password,
      },
    })
      .then((res) => {
        localStorage.setItem("token", res.data.token); //로컬에다가 토큰저장! res는 서버가 주는값

        dispatch(setUser(email));
        history.push("/main");
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
  setUser,
  loginCheck,
  logOutSV,
  logoutDB,
};
