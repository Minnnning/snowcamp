import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import TopNav  from "./components/TopNav"
import UserInfo  from "./components/UserInfo"
import Menu  from "./components/Menu"

const user = {
	username:"김민정",
	userImgPath:"https://mblogthumb-phinf.pstatic.net/MjAyMTAxMTVfMTQy/MDAxNjEwNzA3OTI5NTc5.cKTzFMOwZUp9VCfdW_Dg8kkPGU3sNmOZIHi6R_31HI8g.HNWQB0zojY4M8-VRSkAn0fhaXXdX4QulmXWmKxoiO04g.JPEG.41minit/1610707724432.jpg?type=w800",
	userInfo:"cosmic 김민정",
	tags : [
        {id:1,name:"IT"},
        {id:2,name:"Start-Up"},
        {id:3,name:"개발자"},
        {id:4,name:"게임"},
        {id:5,name:"web"}
    ]
  }
const listArticles = [
	{
		src:"https://img1.daumcdn.net/thumb/C280x280.fpng/?fname=http://t1.daumcdn.net/brunch/service/user/5tdm/image/awCx6_lLVT4xus0_HP36eWQ_wjg.png",
		title: "내 정보",
		preview: "운동의 시작은 오늘부터",
		createDate: "2000-07-04"
	},
	{
		src:"https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Ftvcast.phinf%2F20230104_273%2Fn9o7c_16728336929071Tu7t_JPEG%2F63b563a675681c5f2e39f913_upload_1672832008406.jpeg%22&type=nf464_260",
		title: "TV 드라마",
		preview: "다른 사모님을 찾아가 손정미을 ",
		createDate: "2023-01-04"
	},
	{
		src:"https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Ftvcast.phinf%2F20230104_113%2FigP1F_16728135918990o4pD_JPEG%2Fclip_20230104151431_9.jpg%22&type=nf464_260",
		title: "TV 예능",
		preview: "김남희 연기에 과몰입한",
		createDate: "2023-01-03"
	}
];
const images = [
	{src:"https://cdnweb01.wikitree.co.kr/webdata/editor/202006/15/img_20200615174427_99db5d6e.webp"},
	{src:"https://cdnweb01.wikitree.co.kr/webdata/editor/202006/15/img_20200615174438_f3d9b9fb.webp"},
	{src:"https://cdnweb01.wikitree.co.kr/webdata/editor/202006/15/img_20200615174444_232ea4f6.webp"},
	{src:"https://cdnweb01.wikitree.co.kr/webdata/editor/202006/15/img_20200615174446_f252d89e.webp"},
	{src:"https://cdnweb01.wikitree.co.kr/webdata/editor/202006/15/img_20200615174449_5d310f5a.webp"},
	{src:"https://cdnweb01.wikitree.co.kr/webdata/editor/202006/15/img_20200615174501_3f642b08.webp"},
	{src:"https://cdnweb01.wikitree.co.kr/webdata/editor/202006/15/img_20200615174605_9a071507.webp"},
	{src:"https://cdnweb01.wikitree.co.kr/webdata/editor/202006/15/img_20200615174516_44fe039e.webp"},
	{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdRIdqYTeuS_CFPVmxwgEwABCcqmB-82u0DQ&usqp=CAU"},
	{src:"http://social.phinf.naver.net/20200216_113/1581817802286ALBRW_JPEG/Screenshot_20200216-035456_Baidu.jpg?type=w710_1"},
	{src:"http://social.phinf.naver.net/20200216_216/1581817690317kv10T_JPEG/Screenshot_20200216-035019_Baidu.jpg?type=w710_1"},
	{src:"http://social.phinf.naver.net/20200216_299/1581817708172i6x9L_JPEG/Screenshot_20200216-035120_Baidu.jpg?type=w710_1"},
	{src:"http://social.phinf.naver.net/20200216_242/1581817657201rvnwu_JPEG/Screenshot_20200216-034841_Baidu.jpg?type=w710_1"}
	
]



const App = () => {
    return (
		<div className='App'>
			<TopNav></TopNav>
			<div>
				<UserInfo name= {user.username} imgPath = {user.userImgPath} info = {user.userInfo}></UserInfo>
				<Menu name= {user.username} tags = {user.tags} listArticles = {listArticles} images={images}></Menu>
			</div>
		</div>
	);
}

export default App;
