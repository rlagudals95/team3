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
  // userName: null,
  // nickName: null,
  // email: null,
};

//미들웨어

//회원가입
const SignupDB = (email, nickName, userName, password, passwordChk) => {
  return function (getState, dispatch, { history }) {
    console.log(email, nickName, userName, password, passwordChk);
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

      // header: {
      //   //토큰을 헤더에 서버에서 현재 접속한 유저정보를 알려줌
      //   token: localStorage.getItem("token"),
      // },
    })
      .then((res) => {
        // console.log("1234");
        // console.log(res);
        console.log(res);
        // localStorage.setItem("token", res.data.token);

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
        console.log(e);
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
        console.log(res);
        localStorage.setItem("token", res.data.token); //로컬에다가 토큰저장! res는 서버가 주는값
        dispatch(
          setUser({
            email: email,
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

// import { createAction, handleActions } from "redux-actions";
// import produce from "immer";
// import axios from "axios";
// import { setCookie, deleteCookie } from "../../share/Cookie";
// import { apikey } from "../../share/apikey";

// //액션타입

// const SET_USER = "SET_USER";
// const GET_USER = "GET_USER";
// const LOG_OUT = "LOG_OUT";

// //액션
// const setUser = createAction(SET_USER, (user) => ({ user }));
// const getUser = createAction(GET_USER, (user) => ({ user }));
// const logOut = createAction(LOG_OUT, (user) => ({ user }));

// const initialState = {
//   user: null,
//   is_login: false,
//   // userName: null,
//   // nickName: null,
//   // email: null,
// };

// //미들웨어

// //회원가입
// const SignupDB = (email, nickName, userName, password, passwordChk) => {
//   return function (getState, dispatch, { history }) {
//     console.log(email, nickName, userName, password, passwordChk);
//     window.alert("연결됨!");
//     axios({
//       method: "post",
//       url: "http://3.36.111.14/insta/register",

//       data: {
//         email: email,
//         nickName: nickName,
//         userName: userName,
//         password: password,
//         passwordChk: passwordChk,
//       },

//       header: {
//         //토큰을 헤더에 서버에서 현재 접속한 유저정보를 알려줌
//         token: localStorage.getItem("token"),
//       },
//     })
//       .then((res) => {
//         console.log("1234");
//         console.log(res);

//         dispatch(
//           setUser({
//             userName: userName,
//             nickName: nickName,
//             email: email,
//           })
//         );

//         history.push("/login");
//       })
//       .catch((e) => {
//         console.log(e);
//         window.alert("회원가입 에러", e);
//         console.log("회원가입 에러:", e);
//       });
//   };
// };

// //로그인

// const LoginDB = (email, password) => {
//   return function (getState, dispatch, { history }) {
//     axios({
//       method: "post",
//       url: "http://3.36.111.14/insta/login",
//       data: {
//         email: email,
//         password: password,
//       },
//     })
//       .then((res) => {
//         localStorage.setItem("token", res.data.token); //로컬에다가 토큰저장! res는 서버가 주는값
//         dispatch(
//           setUser({
//             email: email,
//           })
//         );
//         history.push("/");
//       })
//       .catch((e) => {
//         window.alert("로그인 에러", e);
//         console.log("로그인 에러", e);
//       });
//   };
// };

// //로그아웃
// const logoutDB = () => {
//   return function (dispatch) {
//     dispatch(logOut());
//   };
// };

// //리듀서

// export default handleActions(
//   {
//     [SET_USER]: (state, action) =>
//       produce(state, (draft) => {
//         setCookie("is_login", "login success");
//         draft.user = action.payload.user;
//         draft.is_login = true;
//       }),
//     [GET_USER]: (state, action) =>
//       produce(state, (draft) => {
//         draft.user = action.payload.user;
//         draft.is_login = true;
//       }),
//     [LOG_OUT]: (state, action) =>
//       produce(state, (draft) => {
//         deleteCookie("is_login");
//         draft.user = null;
//         draft.is_login = false;
//       }),
//   },
//   initialState
// );

// export const actionsCreators = {
//   SignupDB,
//   LoginDB,
//   logoutDB,
//   getUser,
// };
