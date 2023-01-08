import React from 'react';
import UserIntro  from "./UserIntro"
import Articles  from "./Articles"
import Works  from "./Works"

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function Menu(props) {
    
    return (
        <BrowserRouter>
            <Nav fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/info">작가소개</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/articles">글 {props.listArticles.length}</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="works">작품 {props.images.length}</Nav.Link>
                </Nav.Item>  
            </Nav>
            <Routes>
                <Route path="/info" element={<UserIntro tags ={props.tags} name = {props.name}/>}></Route>
                <Route path="/articles" element={<Articles listArticles={props.listArticles}/>}></Route>
                <Route path="/works" element={<Works images={props.images}/>}></Route>
            </Routes>
        </BrowserRouter>
        
    );

}


export default Menu;