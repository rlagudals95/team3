import React from "react";
import styled from "styled-components";

const Grid = (props) => {
    const { position, maxWidth, boxShadow, bdrd, border, is_flex, width, padding, margin, bg, children, center, _onClick, height, display, textAlign, flex_direction } = props;

    const styles = {
        is_flex: is_flex,
        width: width,
        height: height,
        margin: margin,
        padding: padding,
        bg: bg,
        border: border,
        center: center,
        bdrd: bdrd,
        borderRadius: bdrd,
        boxShadow: boxShadow,
        display: display,
        textAlign: textAlign,
        flex_direction: flex_direction,
        maxWidth: maxWidth,
        position: position,
    };
    return (
        <React.Fragment>
            <GridBox {...styles} onClick={_onClick}>{children}</GridBox>
        </React.Fragment>
    );
};

Grid.defaultProps = {
    children: null,
    is_flex: false,
    width: "100%",
    height: "100%",
    padding: false,
    margin: false,
    bg: false,
    center: false,
    border: false,
    bdrd: false,
    boxShadow: false,
    display: false,
    textAlign: false,
    flex_direction: false,
    maxWidth: false,
    position: false,
    _onClick: () => { },
};

const GridBox = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    box-sizing: border-box; //확인
    ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
    ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
    ${(props) => props.is_flex
        ? `display: flex; align-items: center;
        // justify-content: space-between;
        `
        : ""}
    ${(props) => props.center ? `text-align:center;` : ""};
    border: ${(props) => props.border};
    border-radius: ${(props) => props.bdrd};
    box-shadow: ${(props) => props.boxShadow};
    display: ${(props) => props.display};
    text-align: ${(props) => props.textAlign};
    max-width: ${(props) => props.maxWidth};
    flex-direction: ${(props) => props.flex_direction};
    position : ${(props) => props.position};
`;

export default Grid;