import React from "react";
import styled from "styled-components";

const ProfilePost = (props) => {
  const { width, margin, padding, bg, center, height } = props;

  const styles = {
    width: width,
    margin: margin,
    padding: padding,
    bg: bg,
    center: center,
    height: height,
  };

  return <Card {...styles} />; //여기 props.image 같은걸 넣어야 할 것 같다
};

ProfilePost.defaultProps = {
  width: "300px",
  padding: null,
  margin: false,
  height: "300px",
  bg:
    "https://static.hubzum.zumst.com/hubzum/2020/03/11/10/6eb94133c3434155a608e2af67f9ef9e.jpg",
};

const Card = styled.div`
  margin-top: -20px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) => (props.margin ? `margin:${props.margin};` : "")}
  ${(props) => (props.bg ? `background-image: url(${props.bg})` : "")}
  box-sizing: border-box;
  cursor: pointer;
  background-image: url(${(props) => props.bg});
  /* background-image: url("https://static.hubzum.zumst.com/hubzum/2020/03/11/10/6eb94133c3434155a608e2af67f9ef9e.jpg"); */
  /* background-color: red; */
  /* background-size: cover; */
`;
export default ProfilePost;
