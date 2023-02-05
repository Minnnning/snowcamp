import React from 'react';
import { useEffect, useState } from 'react';

function List(prop) {
    
    async function del(elem) {
        const data = await fetch('http://127.0.0.1:8000/food/delete/'+elem,{method:"delete"});
        }

    async function creat() {
        let food = await prompt('음식을 입력하세요', '');
        let descript = await prompt('설명을 입력하세요', '');
        const data = await fetch('http://127.0.0.1:8000/food/create/',{ 
        method:'post',
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({
        "food_name": food,
        "description": descript,
        }),
        })
        }

    async function modify(elem) {
        let descript = await prompt('수정할 내용을 입력하세요', '');
        const data = await fetch('http://127.0.0.1:8000/food/change/'+elem,{ 
        method:'put',
        headers: {
            "Content-Type": "application/json",
            },
        body: JSON.stringify({
        "description": descript,
        }),
        })
        }
    let array = prop.data.map((elem,id) => (
        <div key={id}>
        <h2>{elem['food_name']}</h2><p>내용:{elem['description']}</p>
        <button onClick= {() => del(elem['food_name'])}>삭제</button>
        <button onClick= {() => modify(elem['food_name'])}>수정</button>
        <hr></hr> 
        </div>
    ));
    
    useEffect(()=>{
        array = prop.data.map((elem,id) => (
            <div key={id}>
            <h2>{elem['food_name']}</h2><p>내용:{elem['description']}</p>
            <button onClick= {() => del(elem['food_name'])}>삭제</button>
            <button onClick= {() => modify(elem['food_name'])}>수정</button>
            <hr></hr> 
            </div>
        ));
    },[array])
    
    return(
        <>
        <span>총 : {prop.cnt}개</span>
        <button onClick = {() => creat()}>추가</button>
        {array}
        </>
    )
}
export default List;