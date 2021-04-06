import React from "react";
import styled from "styled-components";
import { Grid, Text, Button, Input } from "../elements";
import { useDispatch } from "react-redux";
import { history } from "../redux/configureStore";
import { emailCheck } from "../share/common";
import { actionsCreators as UserActions } from "../redux/modules/user";

const Signup = (props) => {
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState("");
  const [nickName, setNickname] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordChk, setPwdCheck] = React.useState("");
  const [userName, setUserName] = React.useState("");

  const signup = () => {
    if (email === "" || password === "" || userName === "") {
      window.alert("아이디, 성함, 패스워드, 닉네임을 모두 입력해주세요!");
      return;
    }

    if (!emailCheck(email)) {
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    }

    if (password !== passwordChk) {
      window.alert("패스워드와 패스워드 확인이 일치하지 않습니다!");
      return;
    }

    dispatch(
      UserActions.SignupDB(email, nickName, userName, password, passwordChk)
    );
  };

  return (
    <React.Fragment>
      <OutBox>
        <InnerBoxLeft />
        <InnerBox>
          <LoginBox>
            {/* <div style={{ fontSize: "50px", margin: "20px 0px 10px 0px " }}>
            LOGO
          </div> */}
            <Logo></Logo>
            <div style={{ fontSize: "12px" }}>
              친구들의 사진과 동영상을 보려면 가입하세요.
            </div>
            <Grid padding="16px 0px">
              <Input
                placeholder="이메일을 입력해주세요."
                _onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Input
                placeholder="닉네임 입력해주세요."
                _onChange={(e) => {
                  setNickname(e.target.value);
                }}
              />
              <Input
                placeholder="이름을 입력해주세요."
                _onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <Input
                placeholder="패스워드 입력해주세요."
                type="password"
                _onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Input
                placeholder="패스워드를 확인해 주세요"
                type="password"
                _onChange={(e) => {
                  setPwdCheck(e.target.value);
                }}
              />
              <Button
                text="회원가입"
                width="240px"
                height="40px"
                _onClick={signup}
              />
            </Grid>
          </LoginBox>
          <SingUpBox>
            <SingUpText>
              계정이 있으신가요?
              <span
                style={{ color: "#0095f6", fontWeight: "bold" }}
                onClick={() => {
                  history.push("/login");
                }}
              >
                로그인
              </span>
            </SingUpText>
          </SingUpBox>
        </InnerBox>
      </OutBox>
    </React.Fragment>
  );
};

const OutBox = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 700px;
  height: 600px;

  margin: 25% auto;
  z-index: 1;
  display: flex;
  justify-content: space-between;
`;

const InnerBox = styled.div`
  width: 330px;
  height: 430px;
  padding: 0;
  margin: auto;
`;

const InnerBoxLeft = styled.div`
  width: 300px;
  height: 450px;
  margin: auto;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/image-community-9d16c.appspot.com/o/images%2F%EC%9D%B8%EC%8A%A4%ED%83%80%20%EB%A1%9C%EA%B7%B8%EC%9D%B8%20%ED%99%94%EB%A9%B4.jpg?alt=media&token=61d2f880-09be-4e3a-aa42-001dd111e11f");
  background-size: cover;
`;

const Logo = styled.div`
  margin: 20px auto;
  width: 200px;
  height: 85px;
  background-image: url("https://pngimage.net/wp-content/uploads/2018/06/font-instagram-png-5.png");
  background-size: cover;
`;

const LoginBox = styled.div`
  width: 300px;
  align-items: center;
  margin: auto;
  border: 1px solid lightgray;
`;

const LoginBtn = styled.button`
  width: 240px;
  height: 25px;
`;

const SingUpBox = styled.div`
  border: 1px solid lightgray;
  width: 300px;
  height: 80px;
  margin: 10px auto;
  text-align: center;
  cursor: pointer;
`;

const SingUpText = styled.div`
  margin-top: 27px;
  align-items: center;
`;

const Bg = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fafafa;
`;

export default Signup;
