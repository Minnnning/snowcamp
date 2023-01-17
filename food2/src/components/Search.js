import React,{ useState,Suspense } from 'react';
import List from "./List"


//이부분에서 값을 다음 컴포넌트로 전달해야하는데
//비동기적 작업이 실행되어 값을 받기전에 다음 컴포넌트로 넘어가서 null이 넘어간다
//따라서 fetch가 다 실행되고 나서 다음 컴포넌트를 실행해야한다
function Loading(reload) {

	if (reload == true ) {
		return (
			<>
				<h1>{props.name}</h1>
				<List food={value}/>
			</>
		) 
	} else {
		return(
			<h2>로딩중입니다</h2>
		)
	}
}

function Search(props) {
	const [reload,setReload] = useState(false);
	const [value,setValue] = useState("");

	let address = "http://openapi.foodsafetykorea.go.kr/api/bcdf44661c7d4f1981fe/I2790/json/1/7/DESC_KOR="+props.name;
	fetch(address)
		.then((response) => response.json())
			.then((data) => {
				//foodList = JSON(data.I2790.row);//js객체로 변환
				//console.log(foodList)
				setValue(data.I2790.row);
				setReload(true);
				console.log("중복실행되나?");
			})
			.catch(error => {
				console.log("fetch 에러!");
				alert("다시 입력해주세요!")              
			}) 
		

		

	  
    return (
		<>{Loading(reload,)}</>)
    
}

export default Search;