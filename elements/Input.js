import React from "react";
import styled from "styled-components";
import { Text, Grid } from "./index";

const Input = (props) => {
    const { multiLine, label, placeholder, _onChange, type, value, is_submit, onSubmit } = props;

    if (multiLine) {
        return (
            <Grid>
                {label && <Text margin="0px">{label}</Text>}
                <ElTextarea value={value} rows={10} placeholder={placeholder} onChange={_onChange} ></ElTextarea>
            </Grid>
        )
    }

    return (
        <React.Fragment>
            <Grid>
                {label && <Text margin='0px'>{label}</Text>}
                {is_submit ? (<ElInput onKeyPress={(e)=>{
                    if(e.ky === "Enter"){
                        onSubmit(e);
                    }
                }} type={type} placeholder={placeholder} onChange={_onChange} value={value} />) : (<ElInput type={type} placeholder={placeholder} onChange={_onChange} />)}
            </Grid>
        </React.Fragment>
    )
}

Input.defaultProps = {
    multiLine: false,
    label: false,
    placeholder: '텍스트를 입력해주세요.',
    _onChange: () => { },
    type: 'text',
    value: "",
    is_submit: false,
    onSubmit: () => { },
}

const ElTextarea = styled.textarea`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

const ElInput = styled.input`
    border: 1px solid #212121;
    width: 100%;
    padding: 12px 4px;
    box-sizing: border-box;
`

export default Input;