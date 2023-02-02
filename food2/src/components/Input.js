import React,{ useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Input(props) {
    const btn = () => {
        props.changeBtn(props.text);
    }
    
    // <button onClick={btn}>입력</button> <button onClick={btn}><Link to="/">입력</Link></button>
    return <button onClick={btn}><Link to="/">입력</Link></button>
}
export default Input;