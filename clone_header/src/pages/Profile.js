import React from "react-redux";
import Header from "../components/Header";
import styled from "styled-components";

const Profile = () => {
  return (
    <div>
      <Header />
      <ProfileImg />
      <ProfileName>user_name</ProfileName>
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

const ProfileName = styled.div``;

export default Profile;
