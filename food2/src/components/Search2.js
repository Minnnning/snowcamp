import React,{ useState,Suspense } from 'react';
import List from "./List"

//이부분에서 값을 다음 컴포넌트로 전달해야하는데
//비동기적 작업이 실행되어 값을 받기전에 다음 컴포넌트로 넘어가서 null이 넘어간다
//따라서 fetch가 다 실행되고 나서 다음 컴포넌트를 실행해야한다

function Search(props) {

    
	function fet(name){
		let foodList = false
		let address = "http://openapi.foodsafetykorea.go.kr/api/bcdf44661c7d4f1981fe/I2790/json/1/7/DESC_KOR="+name;
		fetch(address)
			.then((response) => response.json())
				.then((data) => {
					foodList = data.I2790.row;//js객체로 변환
					console.log(foodList)
				})
				/*.catch(error => {
					console.log("fetch 에러!");
					alert("다시 입력해주세요!")              
				}) 정상출력후에 오류가 실행된다
				*/

		return foodList;
	}
    
    return(
        <Suspense fallback={<div>Loading...</div>}>
        	<h1>{props.name}</h1>
          	<List foodList = {fet(props.name)}/>
        </Suspense>
    )
    
}

export default Search;