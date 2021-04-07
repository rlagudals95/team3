import React, { Fragment, useState } from "react";
import Image2 from "../elements/Image2";
import Grid2 from "../elements/Grid2";
import styled, { keyframes, css } from "styled-components";
import Modal from "./Modal";
import CommentList from "./CommentList"
import CommentWrite from "./CommentWrite";
import Doubleheart from "../doubleheart.png"

const Post = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [active, setActive] = useState(false)
  const [is_like, setLike] = useState(false)

  const openModal = (e) => {
    console.log("1");
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

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
    background-image: url("${props.img}");
  `;

  const Profilename = styled.p`
    margin-left: 10px;
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


  const fadeIn = keyframes`
  0% {
  transform: scale(1);
  }
  25%{
    transform: scale(1.2)
  }
  50% {
  transform: scale(0.95);
  }
  100% {
  transform: scale(1);
  }
  `

  const Likebox = styled.div`
  padding: 8px;
  display: flex;
  margin: 0;
  position: relative;
  align - items: center;
  justify - content: cover;
  animation-duration: 0.45s;
  animation-timing-function: ease-in-out;
  ${active &&
    css`
      animation-name: ${fadeIn};
    `}
  `;

  const DoublefadeIn = keyframes`
  0%, 100% {
    opacity: 0;
    transform: scale(0);
  }
  15%{
    opacity: .9;
    transform: scale(1.2);
  }
  30% {
    transform: scale(.95);
  }
  45%, 80% {
    opacity: .9;
    transform: scale(1);
  }
  `

  const [actives, setActives] = useState(false)

  const Double = styled.div`
  background-repeat: no-repeat;
  background-position: 0 0;
  height: 128px;
  width: 128px;
  animation-duration: 1s;
  margin: auto;
  opacity: 0;
  animation-timing-function: ease-in-out;
  background-image: url("${Doubleheart}");
  z-index: 99;
  ${actives &&
    css`animation-name: ${DoublefadeIn};`
    }
  `;

  return (
    <Fragment>
      <Post>
        <Posting>
          <Grid2 is_flex width="auto" height="60px" padding="16px">
            <Image2
              size="32"
              shape="circle"
              src={props.user_img}
            />
            <Profilename>{props.user_id}</Profilename>
            <Option onClick={openModal}>
              <svg
                aria-label="옵션 더 보기"
                class="_8-yf5 "
                fill="#262626"
                height="16"
                viewBox="0 0 48 48"
                width="16"
              >
                <circle
                  clip-rule="evenodd"
                  cx="8"
                  cy="24"
                  fill-rule="evenodd"
                  r="4.5"
                ></circle>
                <circle
                  clip-rule="evenodd"
                  cx="24"
                  cy="24"
                  fill-rule="evenodd"
                  r="4.5"
                ></circle>
                <circle
                  clip-rule="evenodd"
                  cx="40"
                  cy="24"
                  fill-rule="evenodd"
                  r="4.5"
                ></circle>
              </svg>
            </Option>
          </Grid2>
          <StoryPic>
            <Double
              onAnimationEnd={() => {
                setActives(false)
              }}
            />
            <Img
              onDoubleClick={() => {
                setActives(true)
                setLike(true)
              }}
            />
          </StoryPic>
          <Mainbox>
            <Mainbox1>
              <Fav>
                <Likebox
                  style={{ marginLeft: "-8px" }}
                  onClick={() => {
                    setActive(true)
                    if (is_like) {
                      setLike(false)
                    } else {
                      setLike(true)
                    }
                  }
                  }>
                  {is_like ?
                    <svg aria-label="좋아요 취소" class="_8-yf5 " fill="#ed4956" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                    : <svg aria-label="좋아요" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>}
                </Likebox>
              </Fav>
              <Fav>
                <Favbox>
                  <svg
                    aria-label="댓글 달기"
                    class="_8-yf5 "
                    fill="#262626"
                    height="24"
                    viewBox="0 0 48 48"
                    width="24"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </Favbox>
              </Fav>
              <Fav>
                <Favbox>
                  <svg
                    aria-label="게시물 공유"
                    class="_8-yf5 "
                    fill="#262626"
                    height="24"
                    viewBox="0 0 48 48"
                    width="24"
                  >
                    <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                  </svg>
                </Favbox>
              </Fav>
              <Fav2>
                <Favbox>
                  <svg
                    aria-label="저장"
                    class="_8-yf5 "
                    fill="#262626"
                    height="24"
                    viewBox="0 0 48 48"
                    width="24"
                  >
                    <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                  </svg>
                </Favbox>
              </Fav2>
            </Mainbox1>
            <Mainbox2>좋아요 {props.like}개</Mainbox2>
            <Mainbox3>
              <Comment>
                <Commentname>{props.user_id}</Commentname> {props.contents}
              </Comment>
              <CommentList />
            </Mainbox3>
            <Mainbox4>
              <Postdate>{props.insert_dt}</Postdate>
            </Mainbox4>
            <Mainbox5>
              <CommentWrite />
            </Mainbox5>
          </Mainbox>
        </Posting>
      </Post>
      <Modal open={modalOpen} close={closeModal} header={"123"} />
    </Fragment>
  );
};

Post.defaultProps = {
  user_id: "sparta",
  user_img: "https://cdn.discordapp.com/attachments/578800402036949002/825716597414035517/e.jpg",
  img: "https://cdn.discordapp.com/attachments/578800402036949002/825716597414035517/e.jpg",
  contents: "내용",
  insert_dt: "2분 전",
  is_me: false,
  like: "0",
};

export default Post;