import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from "axios";
import { apikey } from "../../share/apikey";

const UPLOAD_PROFILE = "UPLOAD_PROFILE";

//
const getProfile = createAction(UPLOAD_PROFILE, (profile) => ({ profile }));

//

const initialState = {
  //여기서 useSelector로 긁어서 가져가야한다
  nickName: null,
  userName: null,
  img_url: null,
};

const getProfileDB = (token) => {
  return function (getState, dispatch, { history }) {
    axios({
      method: "GET",
      url: "http://3.36.111.14/insta/profile", //가져오고 디스패치 getProfile로 리덕스 데이터에 넣어준다?
      headers: {
        authorization: token,
      },
    })
      .then((res) => {
        console.log(res);
        console.log(res.data.nickName);
        console.log(res.data.userName);
        console.log(res.data.boardAll[0].img);
        dispatch(
          getProfile({
            nickName: res.data.nickName,
            userName: res.data.userName,
            img_url: res.data.boardAll[0].img,
          })
        );
      })
      .catch((e) => {
        window.alert("프로필 에러", e);
        console.log("프로필 에러", e);
      });
  };
};

//

//

export default handleActions(
  {
    [UPLOAD_PROFILE]: (state, action) =>
      produce(state, (draft) => {
        draft.profile = action.payload.profile;
      }),
  },
  initialState
);

export const actionsCreators = {
  getProfileDB,
  getProfile,
};
