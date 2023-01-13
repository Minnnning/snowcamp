import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Works(props) {
    const navigate = useNavigate();
    const posts =[]
    for (let i =0; i<props.images.length; i++){
        let a = props.images[i];
        posts.push(
            <Col key={i}>
                <Card>
                    <Card.Img variant="top" src={a.src} />
                </Card>
            </Col>)
               
    }

    return (
        <>
            <Row xs={2} md={2} className="g-4"> 
                {posts}
            </Row>
            <div className="d-grid gap-2">
                <Button variant="secondary" size="lg" onClick={() => navigate(-1)}>
                    Back
                </Button>
            </div>
    </>
    );
}

export default Works;