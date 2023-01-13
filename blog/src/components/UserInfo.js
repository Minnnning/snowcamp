import React from 'react';
import Image from 'react-bootstrap/Image'

function UserInfo(props) {
	return (
		<>
			<h2>{props.name}</h2>
			<Image src= {props.imgPath} roundedCircle width="10%" />
			<p>{props.info}</p>
			<p>구독자 123</p>
			<p>관심작가 26</p>
		</>
	);
}

export default UserInfo;