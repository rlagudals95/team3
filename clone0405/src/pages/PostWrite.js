import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import {actionCreator as imageActions } from "psot2"
import styled from "styled-components";
import Image2 from "../elements/Image2";
import Grid2 from "../elements/Grid2";
import CommentWrite from "./CommentWrite";
import Upload from "../components/Upload";
import Input from "../elements/Input";
import { FormatBoldRounded } from "@material-ui/icons";
import { Button } from "../elements";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as imageActions } from "../redux/modules/image";

const PostWrite = () => {
  const [file, setFile] = React.useState(null);
  const preview = useSelector((state) => state.image.preview); //프리뷰 값을 가져옴

  const Img = styled.img`
    height: 100%;
    width: 100%;
    // left: 0;
    position: absolute;
    // top: 0;
    // object-fit:cover;
    // display:flex;
    // justify-content:center;
    // align-items:center;
    background-size: cover;
    background-image: url("${preview}"); //여기서 프리뷰
  `;

  const dispatch = useDispatch();

  const [text, setText] = React.useState("");

  // const [boardImg, setboardImg] = React.useState("");

  // const getFile = (e) => {
  //   setFile(e.target.files[0]);
  // };

  const token = localStorage.getItem("token");

  // console.log(token);

  const fileInput = React.useRef();

  const [item, setItem] = React.useState(null);

  const selectFile = (e) => {
    // e.target은 input이죠!
    // input이 가진 files 객체를 살펴봅시다.
    console.log(e.target.files);
    // 선택한 파일이 어떻게 저장되어 있나 봅시다.
    console.log(e.target.files[0]);

    // ref로도 확인해봅시다. :)
    console.log(fileInput.current.files[0]);
    const reader = new FileReader();
    var file = fileInput.current.files[0];
    setItem(file);
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      console.log(reader.result); //이게 인터넷 이ㅣ지 링크!
      dispatch(imageActions.setPreview(reader.result));
    };
  };

  const postWrite = () => {
    dispatch(postActions.addPostDB(text, item, token));
  };

  // const test = (e) => {
  //   setContents(e.target.value);
  // };

  return (
    <CenterDispaly>
      {/* <input onChange={test} value={contents} type="text" /> */}
      <Leftmain>
        <Post>
          <Posting>
            <Grid2
              is_flex
              width="auto"
              height="60px"
              padding="16px"
              justifyContent="space-between"
            >
              <Image2
                size="32"
                shape="circle"
                src="https://i.pinimg.com/originals/11/1a/03/111a03133d14214539c96e0f657dff1a.png"
              />
              <Profilename>name</Profilename>
              <input
                type="file"
                name="boardImg"
                ref={fileInput}
                onChange={selectFile}
              />

              {/* <Upload /> */}
            </Grid2>

            <Image2
              shape="rectangle"
              src={preview ? preview : "http://via.placeholder.com/400x300"}
            />
            <Mainbox>
              <div style={{ margin: "10px 0", fontSize: "12px" }}>
                사진설명을 적어주세요
              </div>

              <Input
                value={text}
                _onChange={(e) => {
                  setText(e.target.value);
                }}
                multiLine
              />

              {/* <Input
                value={contents}
                multiLine//
                onChange={{ test }}
                placeholder="사진설명을 입력해주세요."
                _onChange={test}
              /> */}
              <Button margin="-5px 0 0 0" _onClick={postWrite}>
                게시글 작성!
              </Button>
            </Mainbox>
          </Posting>
        </Post>
      </Leftmain>
    </CenterDispaly>
  );
};

const Leftmain = styled.div`
  float: left;
  margin-right: 28px;
  max-width: 614px;
  width: 1500px;
  align-items: stretch;
  border: 0 solid #000;
  box-sizing: border-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  flex-shrink: 0;
  padding: 0;
  position: relative;
`;

const Post = styled.div`
  flex-direction: column;
  padding-bottom: 4800px;
  padding-top: 0px;
  flex-shrink: 0;
  margin: 1px;
  padding: 0;
  position: relative;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  box-sizing: border-box;
  align-items: stretch;
  border: 0 solid #000;
  -webkit-box-align: stretch;
`;

const Posting = styled.div`
  border-radius: 3px;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  background-color: rgba(var(--d87, 255, 255, 255), 1);
  margin-left: -1px;
  margin-right: -1px;
  align-items: stretch;
  margin-bottom: 60px;
`;

const StoryPic = styled.div`
  position: relative;
  display: flex;
  height: 500px;
`;

const Profilename = styled.p`
  margin-left: -240px;
  // display: flex;
  font-weight: 600;
  font-size: 14px;
`;

const Mainbox = styled.div``;

const Mainbox1 = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 4px;
  display: flex;
`;

const Fav = styled.div`
  // maring: 0px auto;
  // align-items: center;
`;

const Fav2 = styled.div`
  margin-right: -10px;
  margin-left: auto;
`;

const Favbox = styled.div`
  padding: 8px;
  display: flex;
  margin: 0;
  position: relative;
  align-items: center;
  justify-content: cover;
`;

const Mainbox2 = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 14px;
`;

const Mainbox3 = styled.div`
  margin: 0 0 auto;
  padding: 0 16px;
`;

const Mainbox4 = styled.div`
  margin: 0px 0px 6px 0px;
  padding-left: 16px;
  position: relative;
`;

const Mainbox5 = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 4px;
  border-top: 1px solid rgba(var(--ce3, 239, 239, 239), 1);
  font-size: 14px;
  line-height: 18px;
  min-height: 56px;
  display: flex;
`;

const Commentname = styled.span`
  font-weight: 600;
  font-size: 14px;
  margin-right: 4px;
`;

const Comment = styled.p`
  font-weight: 400;
  font-size: 14px;
  margin: 0px auto;
  margin-bottom: 2px;
  display: flex;
`;

const Option = styled.div`
  margin-left: auto;
  cursor: pointer;
`;

const Postdate = styled.p`
  letter-spacing: 0.2px;
  line-height: 18px;
  font-size: 10px;
  color: rgba(var(--f52, 142, 142, 142), 1);
  margin: 0px auto;
  // font-weight: 400;
  // font-size: 14px;
  // margin: 0px auto;
  // margin-bottom : 4px;
  // display:flex;
`;

const ContentsInput = styled.input`
  border: 1px solid lightgrey;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

const CenterDispaly = styled.div`
  top: 500px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
const ElTextarea = styled.textarea`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

export default PostWrite;
