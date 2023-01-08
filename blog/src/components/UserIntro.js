import React from 'react';
import Button from 'react-bootstrap/Button';

function UserIntro(props) {
    const lis = []
    for (let i =0; i<props.tags.length; i++){
        let a = props.tags[i];
        lis.push( <Button key={a.id} variant="secondary" size="sm" disabled> {a.name} </Button>);
        lis.push(<> </>); //이 부분을 모양때문에 추가했는데 이 부분도 배열에 추가면서 key값을 요구함
    }
    return (
        <>
            <h4>소개</h4>
            <p>안녕하세요 cosmic 신입부원 {props.name}입니다!</p>
            <ol>
                {lis}
            </ol>
        </>
    );
}

export default UserIntro;