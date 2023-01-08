function getTime(){ 
    let date = new Date();
    return date.toLocaleString('ko-kr');
}
// html의 정보를 가저오기위함 해당 id를 가진 요소가 변수에 저장된다
let inputBox = document.getElementById('inputField');  // 할 일 입력창
let addToDo = document.getElementById('button-addon2');  // 버튼
let toDoList = document.getElementById('toDoList');  // 리스트


addToDo.addEventListener('click', function(){    // 버튼에 클릭 이벤트가 발생하면
    // title 색상을 위한것 
    let radios = document.querySelector('input[type=radio][name=flexRadioDefault]:checked'); // obiect 리턴
    let color = radios.id; //pink 또는 gray가 저장된다
    console.log(color);

    let layout = document.createElement('div');     //헤더 생성
    layout.setAttribute("class","card"); //생성한 헤더에 클래스와 속성 부여
    
    let title = document.createElement('div');     //헤더 생성

    if (color == "gray") {    
        title.setAttribute("class","card-header"); //생성한 헤더에 클래스와 속성 부여
        title.setAttribute("style","background-color:gary");
    }
    else
    {     
        title.setAttribute("class","card-header");
        title.setAttribute("style","background-color:pink");
    }
    

    let contain = document.createElement('div');     //헤더 생성
    contain.setAttribute("class","card-body"); //생성한 헤더에 클래스와 속성 부여
    
    let text = document.createElement('div');     //헤더 생성
    text.setAttribute("class","card-text");  //생성한 헤더에 클래스와 속성 부여

    // 제거하기위한 삭제 버튼
    let delet = document.createElement('a');     //헤더 생성
    delet.setAttribute("class","btn btn-primary");   //생성한 헤더에 클래스와 속성 부여

    if (!inputBox.value)            // 할 일 입력창에 내용이 입력되지 않으면 alert 발생
        alert('내용을 입력해 주세요!');
    else
    {
        toDoList.appendChild(layout); //card div 생성

        title.innerText = getTime();  // 제목에 시간함수를 넣음
        layout.appendChild(title);   //layout 에 title을 넣음 div class="card"의 내부에 생성되기 위함
        
        layout.appendChild(contain); //layout 에 contain을 넣음

        text.innerText = inputBox.value;  //내용 입력
        contain.appendChild(text);

        //삭제 버튼
        delet.innerText = "삭제";  
        contain.appendChild(delet);

        inputBox.value= "";     // 할 일 입력창 초기화
    }

    

    // 삭제하기 위한 버튼 누르면 실행될 함수
    delet.addEventListener('click', function(){ 
        layout.remove()
    })
})