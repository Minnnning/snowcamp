import React from "react";

function Result(props) {
    console.log(props.text);
    let address = "http://openapi.foodsafetykorea.go.kr/api/bcdf44661c7d4f1981fe/I2790/json/1/7/DESC_KOR="+props.text;
    let lis=[];
    let a;
    fetch(address)
        .then((response) => response.json())
            .then((data) => {
                for (let i=0;i<data.I2790.row.length;i++){
                    console.log(data.I2790.row[i].DESC_KOR);

                    lis.push(data.I2790.row[i].DESC_KOR);
                }
                console.log(data.I2790.row);
                a.bind(data);
            })
            .catch(error => {
                console.log("fetch 에러!");
            }) 
    return(
        <>
            <p>{a}</p>
        </>
    )
    
}

export default Result;