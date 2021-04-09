import styled from "styled-components";
import React from "react";
import "./modal.css";

const Modal = (props) => {
  const { open, close } = props;

  const Alert = () => {
    window.alert("지원하지 않는 기능입니다.");
  };

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <main>
            <ModalboxR onClick={Alert}>신고</ModalboxR>
            <ModalboxR onClick={Alert}>팔로우 취소</ModalboxR>
            <Modalbox onClick={Alert}>게시물로 이동</Modalbox>
            <Modalbox onClick={Alert}>공유 대상...</Modalbox>
            <Modalbox onClick={Alert}>링크 복사</Modalbox>
            <Modalbox onClick={Alert}>퍼가기</Modalbox>
            <Modalbox onClick={close}>취소</Modalbox>
          </main>
        </section>
      ) : null}
    </div>
  );
};


const ModalboxR = styled.button`
line-height: 1.5;
margin: 0;
cursor: pointer;
min-height: 48px;
padding: 4px 8px;
text-align: center;
user-select: none;
vertical-align: middle;
border: solid 0.1px #dbdbdb;
width: 100%;
color: rgba(var(--i30, 237, 73, 86), 1);
font-weight: 700;
background-color: white;
`;

const Modalbox = styled.button`
line-height: 1.5;
margin: 0;
cursor: pointer;
min-height: 48px;
padding: 4px 8px;
text-align: center;
user-select: none;
vertical-align: middle;
border: solid 0.1px #dbdbdb;
width: 100%;
background-color: white;
`;

export default Modal;