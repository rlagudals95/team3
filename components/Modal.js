import styled from "styled-components";
import React, { useState, useRef } from 'react';
import "./modal.css";
import { TextField } from '@material-ui/core';

const Modal = (props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, header, name, id } = props;
    const [disabled, setDisabled] = useState(false);



    // const date = props.header.split('T')
    // const inputName = useRef();
    // const dateText = useRef();
    // const dispatch = useDispatch();
    // const Datebox = styled.div`
    // margin: 5px;
    // `

    // const Text = styled.input`
    // `;

    // const edit = () => {
    //     setDisabled(true);
    //     if (dateText.current.value.length !== 16 || inputName.current.value.length < 1) {
    //         alert("일정내용과 시간을 확인해주세요.")
    //         setDisabled(false)
    //     } else {
    //         let text = inputName.current.value;
    //         let date_info = dateText.current.value.split("T");
    //         let date = date_info[0];
    //         let time = date_info[1];
    //         let schedule = { title: text, date: date, time: time, id: id };
    //         dispatch(updateCalendarFB(schedule));
    //         alert("일정을 수정하였습니다.")
    //         setDisabled(false)
    //         close();
    //     }
    // }

    // const del = () => {
    //     let schedule = { id: id };
    //     dispatch(deleteCalendarFB(schedule));
    //     alert("일정이 삭제되었습니다!")
    //     close();
    // };

    // const comp = () => {
    //     let comp = "true"
    //     let color = "#ffffff"
    //     let complete = { completed: comp, id: id, color: color, date: date[0], time: date[1], title: name };
    //     dispatch(updateCalendarFB(complete));
    //     alert("일정 완료!")
    //     close();
    // }


    const ModalboxR = styled.button`
    // border-top: 0.1px solid #dbdbdb;
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
    color: rgba(var(--i30,237,73,86),1);
    font-weight: 700;
    background-color:white;
    `


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
    background-color:white;
    `

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open ? 'openModal modal' : 'modal'}>
            { open ? (
                <section>
                    <main>
                        <ModalboxR>신고</ModalboxR>
                        <ModalboxR>팔로우 취소</ModalboxR>
                        <Modalbox>게시물로 이동</Modalbox>
                        <Modalbox>공유 대상...</Modalbox>
                        <Modalbox>링크 복사</Modalbox>
                        <Modalbox>퍼가기</Modalbox>
                        <Modalbox onClick={close}>취소</Modalbox>
                    </main>
                </section>
            ) : null}
        </div>
    )
}

export default Modal;