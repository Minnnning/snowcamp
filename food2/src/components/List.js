import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Detail from './Detail';
import './button.css';

function List(props) {
    let lis = [];
    let rout = [];

    
    props.data.row.map((elem,id) => {

        lis.push( <ul key={id}><Link to={elem.FOOD_CD} ><button type="button" className="button" >{elem.DESC_KOR}</button> </Link></ul> )
        rout.push(<Route key={id} path={elem.FOOD_CD} element={<Detail data={elem}/>}></Route>)
        }   
    )

    /*
                <h1>{props.name} 검색 결과</h1>
                <Link to={props.data.row[0].FOOD_CD} ><button type="button" onClick={setDetail(true)}> {props.data.row[0].DESC_KOR} </button> </Link>
                <Link to={props.data.row[1].FOOD_CD} ><button type="button" onClick={setDetail(true)}> {props.data.row[1].DESC_KOR} </button> </Link>
                <Link to={props.data.row[2].FOOD_CD} ><button type="button" onClick={setDetail(true)}> {props.data.row[2].DESC_KOR} </button> </Link>
                <Link to={props.data.row[3].FOOD_CD} ><button type="button" onClick={setDetail(true)}> {props.data.row[3].DESC_KOR} </button> </Link>
                <Link to={props.data.row[4].FOOD_CD} ><button type="button" onClick={setDetail(true)}> {props.data.row[4].DESC_KOR} </button> </Link>
                <Link to={props.data.row[5].FOOD_CD} ><button type="button" onClick={setDetail(true)}> {props.data.row[5].DESC_KOR} </button> </Link>
                <Link to={props.data.row[6].FOOD_CD} ><button type="button" onClick={setDetail(true)}> {props.data.row[6].DESC_KOR} </button> </Link>
                */
    
    
    return(
        <Routes>
            <Route path="/" element={lis}></Route>
            {rout}
        </Routes>
    )

}

export default List;