//cors 오류로 http 임시 서버를 열어서 확인함
function input() {	
	let inputname = document.getElementById("index").value;
	console.log(inputname);
    // 이름음 입력 받았을 경우 fetch에 이름을 넣고 찾는 방식을 해볼려고 했는데 fetch get방식에서
    // id말고 다른 걸 넘결 줄 수 있는지 모르겠다
    if (isNaN(inputname)){//숫자가 아닌 경우
        switch(inputname) { //0.박정현 1.복무창 2.오민석 3.한규원 4.김도영 5.김준호 6.문희범
            case "박정현": num = 0;
            break;
            case "복무창": num = 1;
            break;
            case "오민석": num = 2;
            break;
            case "한규원": num = 3;
            break;
            case "김도영": num = 4;
            break;
            case "김준호": num = 5;
            break;
            case "문희범": num = 6;
            break;

            default: num=100; // 만약 이상한 숫자가 아닌값이 넘어가면 오류가 나지만 catch에 잡히지 않는다 
            //따라서 위에 속하지 않으면 숫자로된 아무 값을 넣어 catch로 오류를 찾을 수 있게함 
        }
    } else { //숫자인 경우
        num = inputname
    }
    //url + id를 fetch에 넣어 값을 가져온다
    var address = "https://my-json-server.typicode.com/smashh712/json_placeholder/members/"+num;
    fetch(address)
        .then((response) => response.json())
        .then((data) => {
            //받은 값은 promise<data> 로 반환 된다고 하는데 이부분은 잘 이해하지 못하고 사용
            console.log(data);
            const birthday = document.createElement("div");
            birthday.textContent = "생일은 "+data.birth.substr(0,2)+"년" +data.birth.substr(2,2) +"월"+data.birth.substr(4,2)+"일" + "입니다";
            const userInfo = document.getElementById("userInfo");
            userInfo.appendChild(birthday);
            
        })
        //num에 숫자가 와야 오류를 잡는다
        .catch(error => {
            console.log("fetch 에러!");
            alert("존재하지 않음")
        }) 
}
