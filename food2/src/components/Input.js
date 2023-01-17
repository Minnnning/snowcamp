import React,{ useState } from 'react';

function Input(props) {
    const btn = () => {
        props.changeBtn(props.text);
    }
    

    return <button onClick={btn}>입력</button>
}
export default Input;