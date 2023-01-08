import React from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

function UserIntro(props) {
    const lis = []
    for (let i =0; i<props.tags.length; i++){
        let a = props.tags[i];
        lis.push( <Button variant="outline-secondary" disabled >{a.name}</Button>);

        
    }
    return (
        <>
            <h4>소개</h4>
            <p>안녕하세요 cosmic 신입부원 {props.name}입니다!</p>
            <Stack direction="horizontal" gap={2}>
                {lis}
            </Stack>
        </>
    );
}

export default UserIntro;