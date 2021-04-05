import React, { useEffect } from "react";
// import { Grid, Image, Text } from "../elements";
// import { useDispatch, useSelector } from "react-redux";
// import { actionCreators as commentActions } from "../redux/modules/comment"
import styled from "styled-components"

const CommentList = (props) => {

    // const dispatch = useDispatch();
    // const comment_list = useSelector(state => state.comment.list);
    // const { post_id } = props;
    // useEffect(() => {
    //     if (!comment_list[post_id]) {
    //         dispatch(commentActions.getCommentFB(post_id));
    //     }
    // }, []);

    // if (!comment_list[post_id] || !post_id) {
    //     return null;
    // }

    return (
        <React.Fragment>
            <CommentItem/>
        </React.Fragment>
    )
}

CommentList.defaultProps = {
    post_id: null,
}

export default CommentList;

const CommentItem = (props) => {

    const { user_profile, user_name, user_id, post_id, insert_dt, contents } = props;
    return (
        <>
            <Comment>
                <Commentname>ho123on</Commentname> zz
                <Option>
                    <svg
                        aria-label="좋아요"
                        class="_8-yf5 "
                        fill="#262626"
                        height="12"
                        viewBox="0 0 48 48"
                        width="12"
                    >
                        <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                    </svg>
                </Option>
            </Comment>
            <Comment>
                <Commentname>hoon</Commentname> zz123
                      <Option>
                    <svg
                        aria-label="좋아요 취소"
                        class="_8-yf5 "
                        fill="#ed4956"
                        height="12"
                        viewBox="0 0 48 48"
                        width="12"
                    >
                        <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                    </svg>
                </Option>
            </Comment>
        </>
    )
}

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

CommentItem.defaultProps = {
    user_profile: "",
    user_name: "hoon",
    user_id: "",
    post_id: 1,
    contents: "안녕하세요",
    insert_dt: '2021-01-01 19:00:00'
}