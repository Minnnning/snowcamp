import React,{ useState } from 'react';
import List from "./List"

import { BrowserRouter, Routes, Route, Link, Router} from 'react-router-dom';

//이부분에서 값을 다음 컴포넌트로 전달해야하는데
//비동기적 작업이 실행되어 값을 받기전에 다음 컴포넌트로 넘어가서 null이 넘어간다
//따라서 fetch가 다 실행되고 나서 다음 컴포넌트를 실행해야한다
function FetchList(name) {
	let url = "http://openapi.foodsafetykorea.go.kr/api/bcdf44661c7d4f1981fe/I2790/json/1/7/DESC_KOR="+name;
	console.log(url);
	return fetch(url).then(function(response) {
	  return response.json();
	});
}

function Search(props) {
	const [target,setTarget] = useState(props.name); //재검색을 위한 state
	const [reload, setReload] = useState(false);//무한 api통신 방지 state
	const [data, setData] = useState("");//데이터 추출용
	if (target != props.name){//재검색을 위한 state
		setTarget(props.name);
		setReload(false);
	}
	console.log("재검색?2",reload); //재검색이 안되는건 여기 reload가 true여서
	

	async function GetList(name) {
		try{
			let foodObj = await FetchList(name);
			console.log(foodObj);
			setReload(true);
			setData(foodObj.I2790);
		} catch(err){
			alert("에러발생");
		}
	}

	if (reload == false){
		GetList(props.name);
	}
//리턴값을 보여주는 함수
	function reloadCheck(reload) {
		if(reload === false){
			return <h2>로딩중입니다</h2>
		} else {
			return (<List data={data} name={target}/>)
		}
	}	



    return (<>{reloadCheck(reload)}</>)
		
}

export default Search;