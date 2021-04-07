import Header from "../components/Header";
import styled from "styled-components";

import ProfilePost from "../components/ProfilePost";
import React from "react";
import { actionsCreators as ProfileActions } from "../redux/modules/profileUpload";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const user_info = useSelector((state) => state.user);
  const ProfileImgs = useSelector((state) => state.profileUpload.image);
  const dispatch = useDispatch();

  console.log(user_info);
  //이제 유즈 셀렉터로 가져오면 오류 안나려나? //signupDB > setUser된 데이터를 가져와서 보내준다
  //그렇게 하면 현재 접속한 유저의 image정보를 가지고 오면 되지 않을까?
  const email = useSelector((state) => state.user.email);
  // const nickname = useSelector((state) => state.user.nickName);

  React.useEffect(() => {
    dispatch(ProfileActions.getProfile(email));
  }, []);

  //이제 여기여 유저가 등록한 사진들을 불러와야겠다.. 그러기 위해선? useselect로 선택?>
  //혹은 axios로 id를 비교하고 그 id로 올린사진을 모두 불러오기

  return (
    <div>
      <Header />
      <UpBox>
        <ProfileImg />
        <ProfileName>
          {/* 유즈 셀렉터로 닉네임 받자 */}
          nick_name
          <hr style={{ marginTop: "20px", width: "100%" }}></hr>
        </ProfileName>
      </UpBox>
      <PostBox>
        <ProfilePost bg="https://content.presspage.com/uploads/2379/1920_ocean-sunset-195865.jpg?10000" />
        <ProfilePost bg="https://mblogthumb-phinf.pstatic.net/MjAyMDAzMTlfMTE2/MDAxNTg0NTkyMTgxNjY4.BkquG0ttdOVjO9IRz7FE3TqoyvTx2t4ZFJwR_PLCw0sg.l0VPpKKhOAtrYiSKE-ODacrBeiWev04mONfMkY5SQPgg.JPEG.kma_131/%EB%AC%B4%EC%A7%80%EA%B0%9C_%ED%94%BD%EC%82%AC%EB%B2%A0%EC%9D%B4.jpg?type=w800" />
        <ProfilePost />
        <ProfilePost />
        <ProfilePost />
        <ProfilePost />
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
  top: 950px;
  width: 980px;
  /* display: flex; */
  height: 100%;
  /* display: block; */

  /* justify-content: space-between; */
  padding: 50px 200px;
  flex-wrap: wrap;
`;
export default Profile;
