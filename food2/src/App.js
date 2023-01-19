import logo from './logo.svg';
import Input from './components/Input'
import Search from "./components/Search"
import React,{ useState } from 'react';
import { BrowserRouter} from 'react-router-dom';
import './App.css';

function App() {
	const [search, setSearch] = useState("");//search는 입력이 바뀌면 계속 바뀜
	const onChangeSearch = (e) => {
        setSearch(e.target.value)
    }
	const [input, setInput] = useState("");
	const onChangeInput = (e) => {
        setInput(e)
    }
	console.log('검색어',input);//input에는 검색 버튼을 눌렀을때 입력한 값

	function inputCheck(input) {
		
			if(input.length > 0){
				return <Search name={input} />
			} else{
				return <h1>입력된 값이 없습니다</h1>
			}
		}
		
	
	

    return (
		<BrowserRouter>
			<h1>음식 성분 분석</h1>
			<input type="text" value={search} size="30" onChange={onChangeSearch} />
			<Input text={search} changeBtn={onChangeInput}/>
			{inputCheck(input)}
		</BrowserRouter>
    );
}

export default App;
