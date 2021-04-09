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

  const token = localStorage.getItem("token"); //사용자 정보를 이용해서 그 유저가 올린 사진들만 프로필에 보여줘야하니 토큰이 필요하다

  const [profile, setProfile] = React.useState([]);

  const getProfile = (token) => {
    // 서버와 통신
    axios({
      method: "GET",
      url: "http://3.36.111.14/insta/profile",
      headers: {
        authorization: token,
      },
    })
      .then((res) => {
        setProfile(res.data); //받은 데이터를 useState를 통해서 profile에 저장
      })
      .catch((e) => {
        window.alert("프로필 에러", e);
      });
  };

  console.log(profile);

  React.useEffect(() => {
    //화면이 렌더링 될 때 마다 실행시켜준다
    getProfile(token);
  }, []);

  const profileData = profile.boardAll;

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
        {profileData && //프로필 데이터가 있을때 실행시켜주어야 map이 프로필 데이터를 인식하고 실행된다
          profileData.map((p, idx) => {
            return (
              <ProfilePost {...p} style={{ marginTop: "100px" }} bg={p.img} />
            );
          })}
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
