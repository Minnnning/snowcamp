import React,{ useEffect, useState } from 'react';
import List from './List';

function FoodList() {
    const [result, setResult] = useState(<h1>리스트 출력중</h1>);
    //let result = <h1>리스트 출력중</h1>;

    async function list() {
        const data = await fetch('http://127.0.0.1:8000/food');
        const cnt = await fetch('http://127.0.0.1:8000/foods');
        let dataList = await data.json();
        let count = await cnt.json();
        setResult(<List data ={dataList.foods} cnt={count.foods_num}/>);
      }
    useEffect(() => {
        list();
    },[])
    
    return(
        <div>
            {result}
        </div>
    )
}
export default FoodList;