import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Works(props) {
    const posts =[]
    for (let i =0; i<props.images.length; i++){
        let a = props.images[i];
        posts.push(
            <Col >
                <Card>
                    <Card.Img variant="top" src={a.src} />
                </Card>
            </Col>)
               
    }

    return (
        <Row xs={1} md={2} className="g-4"> 
            {posts}
        </Row>
    );
}

export default Works;