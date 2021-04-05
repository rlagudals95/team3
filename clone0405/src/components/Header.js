import React from "react";
import { Grid, Text, Button } from "../elements";
import styled from "styled-components";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import HomeIcon from "@material-ui/icons/Home";
import InstagramIcon from "@material-ui/icons/Instagram";
import { withRouter } from "react-router";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

const Header = (props) => {
  const { src } = props;

  const styles = { src: src };
  return (
    <HeaderBox>
      <InnerBox>
        <ConnectedRouter history={history}>
          <Logo
            onClick={() => {
              history.push("/");
            }}
          >
            <InstaLogo />
            {/* <InstagramIcon />
            Instagram */}
          </Logo>
          <BtnBox>
            <Btn>
              <HomeIcon
                onClick={() => {
                  history.push("/");
                }}
              />
            </Btn>
            <Btn>
              <FavoriteBorderIcon />
            </Btn>
            <ProfileImg
              {...styles}
              onClick={() => {
                history.push("/profile"); //profile로 가기로 하자
              }}
            />
          </BtnBox>
        </ConnectedRouter>
      </InnerBox>
    </HeaderBox>
  );
};

Header.defaultProps = {
  src:
    "https://img.freepik.com/free-photo/white-cloud-blue-sky-sea_74190-4488.jpg?size=626&ext=jpg&ga=GA1.2.838545545.1616457600",
};

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  align-items: center;
  border: 1px solid lightgray;
  padding: 10px 10px 10px 10px;
  background-color: white;
  height: 40px;
  z-index: 5;
`;

const InnerBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 900px;
  align-items: center;
  /* margin-left: 530px; */
  margin: 0px auto;
`;

const BtnBox = styled.div`
  width: 150px;
  display: flex;
`;

const Logo = styled.div`
  display: flex;
  font-weight: bold;
  cursor: pointer;
`;

const Btn = styled.div`
  cursor: pointer;
  margin: 0px 7px;
`;

const InstaLogo = styled.div`
  background-image: url("https://firebasestorage.googleapis.com/v0/b/image-community-9d16c.appspot.com/o/images%2Finsta_logo.png?alt=media&token=297d0664-3af3-49d8-b47c-0fccecdc9d0d");
  background-size: cover;
  height: 30px;
  width: 120px;
  margin-left: -30px;
`;

const ProfileImg = styled.div`
  width: 25px;
  height: 25px;
  background-image: url("${(props) => props.src}");
  /* background-image: url("https://img.freepik.com/free-photo/white-cloud-blue-sky-sea_74190-4488.jpg?size=626&ext=jpg&ga=GA1.2.838545545.1616457600"); */
  border-radius: 15px;
  margin: 0px 7px;
  cursor: pointer;
`;

export default Header;
