function getTime(){
    let date = new Date();
    setInterval(getTime,1000);
    return date.toLocaleString('ko-kr');
}

let inputBox = document.getElementById('inputField');  // 할 일 입력창
let addToDo = document.getElementById('button-addon2');      // 버튼
let toDoList = document.getElementById('toDoList'); // 리스트


addToDo.addEventListener('click', function(){    // 버튼에 클릭 이벤트가 발생하면
    let title = document.createElement('div');     
    title.setAttribute("class","card-header");
    
    let contain = document.createElement('div');     
    contain.setAttribute("class","card-body");
    if (!inputBox.value)            // 할 일 입력창에 내용이 입력되지 않으면 alert 발생
        alert('내용을 입력해 주세요!');
    else
    {

        title.innerText = getTime();  // <li>입력된 할 일</li>
        toDoList.appendChild(title);      // 할 일 리스트창에 자식으로 붙이기

        contain.innerText = inputBox.value;  // <li>입력된 할 일</li>
        toDoList.appendChild(contain);
        inputBox.value= "";               // 할 일 입력창 초기화
    }

    //list.addEventListener('dblclick', function(){   // list에 더블클릭 이벤트가 발생하면 할 일 리스트창에서 지우기
    //    toDoList.removeChild(list);
    //})
})