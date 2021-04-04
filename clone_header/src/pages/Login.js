import React from "react";
import styled from "styled-components";
import { Grid, Text, Button, Input } from "../elements/index";
import { useDispatch } from "react-redux";
import { history } from "../redux/configureStore";

const Login = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const login = () => {
    if (id === "" || pwd === "") {
      window.alert("아이디 혹은 비밀번호가 공란입니다! 입력해주세요!");
      return;
    }
  };

  return (
    <Bg>
      <OutBox>
        <InnerBoxLeft />
        <InnerBox>
          <LoginBox>
            {/* <div style={{ fontSize: "50px", margin: "20px 0px 10px 0px " }}>
              LOGO
            </div> */}
            <Logo></Logo>
            <Grid padding="16px 0px">
              <Input
                placeholder="아이디를 입력해주세요."
                onChange={(e) => {
                  setId(e.target.value);
                }}
              />
              <Input
                placeholder="패스워드 입력해주세요."
                type="password"
                onChange={(e) => {
                  setPwd(e.target.value);
                }}
              />
              <Button
                text="로그인"
                width="240px"
                height="40px"
                onClick={login}
              />
            </Grid>
          </LoginBox>
          <SingUpBox>
            <SingUpText>
              계정이 없으신가요?{" "}
              <span
                style={{ color: "#0095f6", fontWeight: "bold" }}
                onClick={() => {
                  history.push("/signup");
                }}
              >
                가입하기
              </span>
            </SingUpText>
          </SingUpBox>
        </InnerBox>
      </OutBox>
    </Bg>
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
`;

const SingUpText = styled.div`
  margin-top: 27px;
  align-items: center;
  cursor: pointer;
`;

const Bg = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fafafa;
`;

export default Login;
