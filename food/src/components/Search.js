import React, { useState } from "react";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import '../Search.css';
// import Result from './Result'

function Obj(name,fat,protein,carbohydrate,kcal) {
    this.name = name;
    this.fat = fat;
    this.protein = protein;
    this.carbohydrate = carbohydrate;
    this.kcal = kcal;
}

function result(props) {
    let lis = [];
    console.log(props);
    let address = "http://openapi.foodsafetykorea.go.kr/api/bcdf44661c7d4f1981fe/I2790/json/1/7/DESC_KOR="+props;
    const informat = document.getElementById("info");
    const td = document.createElement("td");
    fetch(address)
        .then((response) => response.json())
            .then((data) => {
                for (let i=0;i<data.I2790.row.length;i++){
                    console.log(data.I2790.row[i].DESC_KOR);

                    lis[i] = new Obj(data.I2790.row[i].DESC_KOR,data.I2790.row[i].NUTR_CONT4,data.I2790.row[i].NUTR_CONT3,data.I2790.row[i].NUTR_CONT2,data.I2790.row[i].NUTR_CONT1)

                    const tr = document.createElement("tr");
                    const btn = document.createElement("button");
                    btn.textContent = data.I2790.row[i].DESC_KOR;
                    btn.setAttribute('name',btn.textContent);
                    btn.setAttribute('class','button'); //색상변경 클래스 추가
                    btn.addEventListener("click", function(event){
                        lis.map((element)=> 
                        {if(element.name == event.target.name){
                            console.log(element.name);
                            console.log('총열량:',element.kcal ,'지방:',element.fat, '탄수화물:',element.carbohydrate, '단백질:',element.protein);
                    }})

                        
                    });
                    tr.appendChild(btn);
                    td.appendChild(tr);
                    
                }
                informat.appendChild(td);
                console.log(data.I2790.row);
                console.log(lis);
            })
            .catch(error => {
                console.log("fetch 에러!");
                alert("다시 입력해주세요!")
                
            })

}


function Search() {
    const [text, setText] = useState("");
    const [disabled, setDisabled] = useState(false);

    const handleChange = ({ target: { value } }) => setText(value);

    const handleSubmit = async (event) => {
        setDisabled(true);
        event.preventDefault();
        console.log(text);
        await new Promise((resolve) => {
            resolve(result(text));
        });
        setDisabled(false);
        
    };
    
    return (
    <>
        <form onSubmit={handleSubmit}>
            <input name="search" value={text} onChange={handleChange} size="50"/>
            <button type="submit" disabled={disabled} >입력</button>
        </form>
        <div id="info"></div>
    </>
    );
}

export default Search;