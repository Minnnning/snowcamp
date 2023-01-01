
function input() {	
	var inputname = document.getElementById("index").value;
	console.log(inputname);
    var address = "https://my-json-server.typicode.com/smashh712/json_placeholder/members/"+inputname;
    fetch(address)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const birthday = document.createElement("div");
            birthday.textContent = "생일은 "+data.birth.substr(0,2)+"년" +data.birth.substr(2,2) +"월"+data.birth.substr(4,2)+"일" + "입니다";
            const userInfo = document.getElementById("userInfo");
            userInfo.appendChild(birthday);
        })
        .catch(error => {
            console.log("fetch 에러!");
            alert("존재하지 않음")
        }) 
}
