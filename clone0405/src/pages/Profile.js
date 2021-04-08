import Header from "../components/Header";
import styled from "styled-components";

import ProfilePost from "../components/ProfilePost";
import React from "react";
import { actionsCreators as ProfileActions } from "../redux/modules/profileUpload";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import zIndex from "@material-ui/core/styles/zIndex";

const Profile = () => {
  const dispatch = useDispatch();

  //이제 유즈 셀렉터로 가져오면 오류 안나려나? //signupDB > setUser된 데이터를 가져와서 보내준다
  //그렇게 하면 현재 접속한 유저의 image정보를 가지고 오면 되지 않을까?

  // const nickname = useSelector((state) => state.user.nickName);

  const token = localStorage.getItem("token");

  const [profile, setProfile] = React.useState([]);

  const getProfile = (token) => {
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
        setProfile(res.data);
      })
      .catch((e) => {
        window.alert("프로필 에러", e);
        console.log("프로필 에러", e);
      });
  };

  console.log(profile);

  React.useEffect(() => {
    // dispatch(ProfileActions.getProfileDB(token));
    getProfile(token);
  }, []);

  // React.useEffect(() => {

  //   if (profileData) {

  //   }

  // }, [profileData]);
  // const profile_data = useSelector((state) => state.profileUpload);
  // console.log(profile_data);

  console.log(profile.boardAll);
  console.log(profile);

  const profileData = profile.boardAll;
  console.log(profileData);
  // const user_info = useSelector((state) => state.user);

  //이제 여기여 유저가 등록한 사진들을 불러와야겠다.. 그러기 위해선? useselect로 선택?>
  //혹은 axios로 id를 비교하고 그 id로 올린사진을 모두 불러오기

  return (
    <div>
      <Header />
      <UpBox>
        <ProfileImg />
        <ProfileName>
          {/* 유즈 셀렉터로 닉네임 받자 */}
          {profile.nickName}
          <hr style={{ marginTop: "20px", width: "100%", zIndex: "100" }}></hr>
        </ProfileName>
      </UpBox>
      <PostBox>
        {profileData &&
          profileData.map((p, idx) => {
            return (
              <ProfilePost {...p} style={{ marginTop: "100px" }} bg={p.img} />
            );
          })}
        {/* <ProfilePost bg="https://content.presspage.com/uploads/2379/1920_ocean-sunset-195865.jpg?10000" />
        <ProfilePost bg="https://mblogthumb-phinf.pstatic.net/MjAyMDAzMTlfMTE2/MDAxNTg0NTkyMTgxNjY4.BkquG0ttdOVjO9IRz7FE3TqoyvTx2t4ZFJwR_PLCw0sg.l0VPpKKhOAtrYiSKE-ODacrBeiWev04mONfMkY5SQPgg.JPEG.kma_131/%EB%AC%B4%EC%A7%80%EA%B0%9C_%ED%94%BD%EC%82%AC%EB%B2%A0%EC%9D%B4.jpg?type=w800" />
        <ProfilePost />
        <ProfilePost />
        <ProfilePost />
        <ProfilePost /> */}
        {/* {ProfileImg.map((p, idx) => {
          return <ProfilePost {...p} />;
        })} */}
      </PostBox>
    </div>
  );
};

const ProfileTop = styled.div`
  width: 100%;
  height: 450px;
  background-color: red;
  align-items: center;
`;

const ProfileImg = styled.div`
  top: 250px;
  width: 150px;
  height: 150px;
  margin: 0px auto;
  border-radius: 85px;
  background-size: cover;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background-image: url("https://content.presspage.com/uploads/2379/1920_ocean-sunset-195865.jpg?10000");
`;

const ProfileName = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  top: 380px;
  font-size: 27px;
  font-weight: 600;
  opacity: 0.6;
  margin-top: 10px;
`;
const UpBox = styled.div`
  display: block;
  width: 100%;
  height: 430px;
`;

const PostBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  grid-auto-rows: 300px;
  grid-gap: 40px;

  margin: 0 auto;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  top: 1100px;
  width: 980px;
  /* display: flex; */
  height: 100%;
  /* display: block; */

  /* justify-content: space-between; */
  padding: 50px 200px;
  flex-wrap: wrap;
`;
export default Profile;
