function getTime(){ //할일을 추가 할 때마다 시간이 변경되어야해서 인터벌 이용
    let date = new Date();
    setInterval(getTime,1000);
    return date.toLocaleString('ko-kr');
}

let inputBox = document.getElementById('inputField');  // 할 일 입력창
let addToDo = document.getElementById('button-addon2');  // 버튼
let toDoList = document.getElementById('toDoList');  // 리스트


addToDo.addEventListener('click', function(){    // 버튼에 클릭 이벤트가 발생하면

    let layout = document.createElement('div');     
    layout.setAttribute("class","card");
    
    let title = document.createElement('div');     
    title.setAttribute("class","card-header");

    let contain = document.createElement('div');     
    contain.setAttribute("class","card-body");
    
    let text = document.createElement('div');     
    text.setAttribute("class","card-text");

    let delet = document.createElement('a');     
    delet.setAttribute("class","btn btn-primary");

    if (!inputBox.value)            // 할 일 입력창에 내용이 입력되지 않으면 alert 발생
        alert('내용을 입력해 주세요!');
    else
    {
        toDoList.appendChild(layout); //card div 생성

        title.innerText = getTime();  // 제목에 시간함수를 넣음
        layout.appendChild(title);   //layout 에 title을 넣음
        
        layout.appendChild(contain); //layout 에 contain을 넣음

        text.innerText = inputBox.value;  //내용 입력
        contain.appendChild(text);

        //삭제 버튼
        delet.innerText = "삭제";  
        contain.appendChild(delet);

        inputBox.value= "";     // 할 일 입력창 초기화
    }

    let radios = document.querySelector('input[type=radio][name=flexRadioDefault]:checked');
    console.log(typeof(radios)); // obiect 리턴
    let color = radios.id;
    console.log(color);
    if (color == "gray") {
        document.getElementsByClassName("card-header")[1].setAttribute("style","background-color:gray;");
    }
    else
    {
        document.getElementsByClassName("card-header")[3].style.backgroundColor = "pink";
    }

    // 삭제하기 위한 버튼 함수
    delet.addEventListener('click', function(){ 
        layout.remove()
    })
})