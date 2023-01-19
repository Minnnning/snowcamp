import React from 'react';

function Detail(props) {
    //상세페이지로 성분영양을 표시한다

    return(
        <>
            {/*<h2>{props.data.DESC_KOR}</h2>*/}
            <br/>
            <li>총 열량: {props.kcal}(kcal)</li>
            <li>탄수화물: {props.carbohydrate}(g)</li>
            <li>단백질: {props.protein}(g)</li>
            <li>지방: {props.fat}(g)</li>
        </>
    )
}

export default Detail;