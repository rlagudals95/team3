import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from "axios";
import { apikey } from "../../share/apikey";

const UPLOAD_PROFILE = "UPLOAD_PROFILE";

//
const getProfile = createAction(UPLOAD_PROFILE, (image) => ({ image }));

//

const getProfileDB = (user_email) => {
  return function (getState, dispatch, { history }) {
    axios({
      method: "get",
      url: `${apikey.api}/api/profile`, //가져오고 디스패치 getProfile로 리덕스 데이터에 넣어준다?
    })
      .then((res) => {
        dispatch(
          getProfile({
            // res.image //가져온 데이터 중에서  이미지를 가져와서 여기 이니셜스테이트에 파박!
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
const initialState = {
  //여기서 useSelector로 긁어서 가져가야한다
  image: [],
};

//

export default handleActions(
  {
    [UPLOAD_PROFILE]: (state, action) =>
      produce(state, (draft) => {
        draft.image = action.payload.image;
      }),
  },
  initialState
);

export const actionsCreators = {
  getProfileDB,
  getProfile,
};
