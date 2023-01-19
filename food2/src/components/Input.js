import React,{ useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Input(props) {
    const btn = () => {
        props.changeBtn(props.text);
    }
    

    return <button onClick={btn}><Link to={props.text}>입력</Link></button>
}
export default Input;