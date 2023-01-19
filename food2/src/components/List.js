import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Detail from './Detail';

function List(props) {
    let lis = [];
    let rout = [];
    props.data.row.map((elem,id) => {

        lis.push(<li key={id}><Link to={elem.FOOD_CD} ><button type="button">{elem.DESC_KOR}</button> </Link></li>)
        rout.push(<Route key={id} path={elem.FOOD_CD} element={<Detail data={elem}/>}></Route>)
        }   
    )

    
        

    //(<li key={props.data.row[i].NUM}><Link to={props.data.row[i].FOOD_CD} ><button type="button">{props.data.row[i].DESC_KOR}</button> </Link></li>)
    //rout.push(<Route path={props.data.row[i].FOOD_CD} element={<Detail data={props.data.row[i]} />}></Route>)

    console.log(props.data);
    return (
        <>
            <h1>{props.name} 검색 결과</h1>
            {lis}
            <Routes>
                {rout}
            </Routes>
        </>
    )
}

export default List;