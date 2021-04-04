import React, { Fragment, useState } from "react";
import { Grid, Image } from "../elements";
import styled from "styled-components";
import axios from 'axios';
import Modal from "./Modal";

const Post = (props) => {
    const [modalOpen, setModalOpen] = useState(false);



    const openModal = (e) => {
        console.log("1")
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }



    const Section = styled.div`
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-flow: row nowrap;
    max-width: 935px;
    position: relative;
    width: 100%;
    flex-grow: 1;
    margin: 0 auto;
    padding-top: 30px;
        `


    const Leftmain = styled.div`
    float: left;
    margin-right: 28px;
    max-width: 614px;
    width: 100%;
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
    `

    const Rightmain = styled.div`
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    padding: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: 0 solid #000;
    max-width: 293px;
    `

    // const Rpcover = styled.div`
    // display:flex;
    // `

    // const Rightprofile = styled.div`
    // margin-top: 18px;
    // margin-bottom: 10px;
    // position: relative;
    // height: auto;
    // display: flex;
    // width:100%;
    // height:auto;
    // margin-top:18px;
    // margin-bottom:10px;
    // align-content: stretch;
    // border: 0 solid #000;
    // display: flex;
    // margin: 0;
    // padding: 0;
    // position: relative;
    // justify-content: space-between;
    // `

    // const Profileid = styled.div`
    // flex: 1 1 auto;
    // min-height: 0;
    // min-width: 0;
    // justify-content: center;
    // width: 100%;
    // height: 100%;
    // margin: auto;
    // `

    const Story = styled.div`
    background: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    margin-bottom: 24px;
    margin-top: 0;
    padding: 16px 0;
    border-bottom: 1px solid rgba(var(--b6a,219,219,219),1);
    display: block;
    overflow-y: hidden;
    `

    const Instory = styled.div`
    height: 84px;
    outline: 0;
    overflow-y: hidden;
    align-items: stretch;
    border: 0 solid #000;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    flex-shrink: 0;
    margin: 0;
    padding: 0;
    position: relative;
    `

    const Post = styled.div`
    flex-direction: column;
    padding-bottom: 4800px;
    padding-top: 0px;
    flex-shrink: 0;
    margin: 0;
    padding: 0;
    position: relative;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    box-sizing: border-box;
    align-items: stretch;
    border: 0 solid #000;
    -webkit-box-align: stretch;
    `

    const Posting = styled.div`
    border-radius: 3px;
    border: 1px solid rgba(var(--b6a,219,219,219),1);
    background-color: rgba(var(--d87,255,255,255),1);
    margin-left: -1px;
    margin-right: -1px;
    align-items: stretch;
    margin-bottom: 60px;
    `


    const StoryPic = styled.div`
    position: relative;
    display: flex;
    height:500px;
    `

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
    background-size : cover;
    background-image: url("https://cdn.discordapp.com/attachments/578800402036949002/728503946884284496/20200703_154636.jpg");
    `


    const Profilename = styled.p`
    margin-left: 10px;
    // display: flex;
    font-weight: 600;
    font-size: 14px;
    `

    const Mainbox = styled.div`
    `


    const Mainbox1 = styled.div`
    padding-left: 16px;
    padding-right: 16px;
    margin-top: 4px;
    display: flex
    `

    const Fav = styled.div`
    // maring: 0px auto;
    // align-items: center;
    `

    const Fav2 = styled.div`
    margin-right: -10px;
    margin-left: auto;
    `

    const Favbox = styled.div`
    padding: 8px;
    display: flex;
    margin: 0;
    position: relative;
    align-items:center;
    justify-content: cover;
    `

    const Mainbox2 = styled.div`
    padding-left: 16px;
    padding-right: 16px;
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 14px;
    `

    const Mainbox3 = styled.div`
    margin: 0 0 auto;
    padding: 0 16px;
    `

    const Mainbox4 = styled.div`
    margin: 0px 0px 6px 0px;
    padding-left: 16px;
    position: relative;
    `

    const Mainbox5 = styled.div`
    padding-left: 16px;
    padding-right: 16px;
    margin-top: 4px;
    border-top: 1px solid rgba(var(--ce3,239,239,239),1);
    font-size: 14px;
    line-height: 18px;
    min-height: 56px;
    display:flex
    `

    const Commentname = styled.span`
    font-weight: 600;
    font-size: 14px;
    margin-right: 4px;
    `

    const Comment = styled.p`
    font-weight: 400;
    font-size: 14px;
    margin: 0px auto;
    margin-bottom : 2px;
    display:flex;
    `

    const Option = styled.div`
    margin-left: auto;
    cursor:pointer;
    `

    const Postdate = styled.p`
    letter-spacing: .2px;
    line-height: 18px;
    font-size: 10px;
    color: rgba(var(--f52,142,142,142),1);
    margin: 0px auto;

    // font-weight: 400;
    // font-size: 14px;
    // margin: 0px auto;
    // margin-bottom : 4px;
    // display:flex;
    `

    const Emote = styled.div`
    // display:flex
    padding: 8px 16px 8px 0;
    `

    const Textarea = styled.textarea`
    flex-grow: 1;
    font-size: inherit;
    height: 18px;
    max-height: 80px;
    outline: 0;
    padding: 0;
    resize: none;
    border: 0px;
    `

    const Commentbutton = styled.button`
    color: rgba(var(--d69,0,149,246),1);
    display: inline;
    padding: 0;
    position: relative;
    border: 0px;
    text-align: center;
    text-transform: inherit;
    text-overflow: ellipsis;
    // pointer-events: none;
    // opacity: .3;
    background: 0 0;
    font-weight: 600;
    `

//     const Circle = styled.div`
//     --size: 56px;
//     width: var(--size);
//     height: var(--size);
//     background-color: rgba(var(--b3f,250,250,250),1);
//     border: 1px solid rgba(0,0,0,.0975);
//     border: 1px solid rgba(var(--jb7,0,0,0),.0975);
//     border-radius: 50%;
//     bottom: 0;
//     content: '';
//     left: 0;
//     pointer-events: none;
//     position: absolute;
//     right: 0;
//     top: 0;
//     background-image: url("https://cdn.discordapp.com/attachments/578800402036949002/728503946884284496/20200703_154636.jpg");
//     background-size: cover;
//     margin: 4px;
// `;


    const Rightbottom = styled.div`
    padding-bottom: 38px;
    width: 100%;
    height: 100%;
    `

    const Nav = styled.div`
    margin-bottom: 3px;
    width: 100%
    height: 100%
    `

    const Navtxt = styled.a`
    color: rgba(var(--edc,199,199,199),1);
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    text-transform: none;
    `

    const Copyright = styled.span`
    color: rgba(var(--edc,199,199,199),1);
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    `

    return (
        <Fragment>
            <Grid height="54px" />
            <Grid bg="rgba(var(--b3f,250,250,250),1)">
                <Section>
                    <Leftmain>
                        <Story>
                            <Instory>
                            </Instory>
                        </Story>
                        <Post>
                            <Posting>
                                <Grid is_flex width="auto" height="60px" padding="16px">
                                    <Image size="32" shape="circle" src="https://cdn.discordapp.com/attachments/578800402036949002/728503946884284496/20200703_154636.jpg" />
                                    <Profilename>sparta</Profilename>
                                    <Option onClick={openModal}>
                                        <svg aria-label="옵션 더 보기" class="_8-yf5 " fill="#262626" height="16" viewBox="0 0 48 48" width="16"><circle clip-rule="evenodd" cx="8" cy="24" fill-rule="evenodd" r="4.5"></circle><circle clip-rule="evenodd" cx="24" cy="24" fill-rule="evenodd" r="4.5"></circle><circle clip-rule="evenodd" cx="40" cy="24" fill-rule="evenodd" r="4.5"></circle></svg>
                                    </Option>
                                </Grid>
                                <StoryPic>
                                    <Img />
                                </StoryPic>
                                <Mainbox>
                                    <Mainbox1>
                                        <Fav >
                                            <Favbox style={{ marginLeft: "-8px" }}>
                                            <svg aria-label="좋아요" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                                                {/* {is_like ?
                                                    <svg aria-label="좋아요 취소" class="_8-yf5 " fill="#ed4956" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                                                    : <svg aria-label="좋아요" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>} */}
                                            </Favbox>
                                        </Fav>
                                        <Fav>
                                            <Favbox>
                                                <svg aria-label="댓글 달기" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path></svg>
                                            </Favbox>
                                        </Fav>
                                        <Fav>
                                            <Favbox>
                                                <svg aria-label="게시물 공유" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
                                            </Favbox>
                                        </Fav>
                                        <Fav2>
                                            <Favbox>
                                                <svg aria-label="저장" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
                                            </Favbox>
                                        </Fav2>
                                    </Mainbox1>
                                    <Mainbox2>
                                        좋아요 300개
                                    </Mainbox2>
                                    <Mainbox3>
                                        <Comment><Commentname>hoon</Commentname> zz</Comment>
                                        <Comment>
                                            <Commentname>
                                                ho123on
                                                </Commentname> zz
                                                <Option>
                                                <svg aria-label="좋아요" class="_8-yf5 " fill="#262626" height="12" viewBox="0 0 48 48" width="12"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                                            </Option>
                                        </Comment>
                                        <Comment>
                                            <Commentname>
                                                hoon
                                                </Commentname> zz
                                                <Option>
                                                <svg aria-label="좋아요 취소" class="_8-yf5 " fill="#ed4956" height="12" viewBox="0 0 48 48" width="12"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                                            </Option>
                                        </Comment>
                                    </Mainbox3>
                                    <Mainbox4>
                                        <Postdate>3일 전</Postdate>
                                    </Mainbox4>
                                    <Mainbox5>
                                        <Grid is_flex width="100%" height="55px" padding="0px auto">
                                            <Emote>
                                                <svg aria-label="이모티콘" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path><path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path></svg>
                                            </Emote>
                                            <Textarea placeholder="댓글 달기...">
                                            </Textarea>
                                            <Commentbutton>
                                                게시
                                            </Commentbutton>
                                        </Grid>
                                    </Mainbox5>
                                </Mainbox>
                            </Posting>
                        </Post>
                    </Leftmain>
                    <Rightmain>
                        <Rightbottom>
                            <Nav>
                                <Navtxt>
                                    소개
                                </Navtxt>
                            </Nav>
                        </Rightbottom>
                    </Rightmain>
                </Section>
            </Grid>
            <Modal open={modalOpen} close={closeModal} header={"123"} />
        </Fragment>
    )
}

export default Post;