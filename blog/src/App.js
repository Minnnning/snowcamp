import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import TopNav from "./components/TopNav";
import UserInfo from "./components/UserInfo";
import Menu from "./components/Menu";
import { ListGroup } from "react-bootstrap";

const user = {
  username: "김민정",
  userImgPath:
    "https://mblogthumb-phinf.pstatic.net/MjAyMTAxMTVfMTQy/MDAxNjEwNzA3OTI5NTc5.cKTzFMOwZUp9VCfdW_Dg8kkPGU3sNmOZIHi6R_31HI8g.HNWQB0zojY4M8-VRSkAn0fhaXXdX4QulmXWmKxoiO04g.JPEG.41minit/1610707724432.jpg?type=w800",
  userInfo: "cosmic 김민정",
  tags: [
    { id: 1, name: "IT" },
    { id: 2, name: "Start-Up" },
    { id: 3, name: "개발자" },
    { id: 4, name: "게임" },
    { id: 5, name: "web" },
  ],
};
const listArticles = [
  {
    src: "https://image.bugsm.co.kr/album/images/1000/40824/4082425.jpg",
    title: "Ditto",
    preview: "NewJeans",
    createDate: "2023.01.02",
  },
  {
    src: "https://image.bugsm.co.kr/album/images/1000/40824/4082425.jpg",
    title: "OMG",
    preview: "NewJeans",
    createDate: "2023.01.02",
  },
  {
    src: "https://image.bugsm.co.kr/album/images/1000/40780/4078016.jpg",
    title: "Hype Boy",
    preview: "NewJeans",
    createDate: "2022.08.01",
  },
  {
    src: "https://image.bugsm.co.kr/album/images/1000/40734/4073469.jpg",
    title: "사건의 지평선",
    preview: "윤하",
    createDate: "2022.03.30",
  },
];
const images = [
  {
    src:
      "https://cdnweb01.wikitree.co.kr/webdata/editor/202006/15/img_20200615174427_99db5d6e.webp",
  },
  {
    src:
      "https://cdnweb01.wikitree.co.kr/webdata/editor/202006/15/img_20200615174438_f3d9b9fb.webp",
  },
  {
    src:
      "https://cdnweb01.wikitree.co.kr/webdata/editor/202006/15/img_20200615174444_232ea4f6.webp",
  },
  {
    src:
      "https://cdnweb01.wikitree.co.kr/webdata/editor/202006/15/img_20200615174446_f252d89e.webp",
  },
  {
    src:
      "https://cdnweb01.wikitree.co.kr/webdata/editor/202006/15/img_20200615174449_5d310f5a.webp",
  },
  {
    src:
      "https://cdnweb01.wikitree.co.kr/webdata/editor/202006/15/img_20200615174501_3f642b08.webp",
  },
  {
    src:
      "https://cdnweb01.wikitree.co.kr/webdata/editor/202006/15/img_20200615174605_9a071507.webp",
  },
  {
    src:
      "https://cdnweb01.wikitree.co.kr/webdata/editor/202006/15/img_20200615174516_44fe039e.webp",
  },
  {
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdRIdqYTeuS_CFPVmxwgEwABCcqmB-82u0DQ&usqp=CAU",
  },
  {
    src:
      "http://social.phinf.naver.net/20200216_113/1581817802286ALBRW_JPEG/Screenshot_20200216-035456_Baidu.jpg?type=w710_1",
  },
  {
    src:
      "http://social.phinf.naver.net/20200216_216/1581817690317kv10T_JPEG/Screenshot_20200216-035019_Baidu.jpg?type=w710_1",
  },
  {
    src:
      "http://social.phinf.naver.net/20200216_299/1581817708172i6x9L_JPEG/Screenshot_20200216-035120_Baidu.jpg?type=w710_1",
  },
  {
    src:
      "http://social.phinf.naver.net/20200216_242/1581817657201rvnwu_JPEG/Screenshot_20200216-034841_Baidu.jpg?type=w710_1",
  },
];

const App = () => {
  return (
    <div className="App">
      <TopNav></TopNav>
      <div style={{ marginRight: "30%", marginLeft: "30%" }}>
        <UserInfo
          name={user.username}
          imgPath={user.userImgPath}
          info={user.userInfo}
        ></UserInfo>
        <Menu
          name={user.username}
          tags={user.tags}
          listArticles={listArticles}
          images={images}
        ></Menu>
      </div>
    </div>
  );
};

export default App;
