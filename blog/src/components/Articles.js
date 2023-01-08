import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


function Articles(props) {
    const navigate = useNavigate();
    const posts =[]
    for (let i =0; i<props.listArticles.length; i++){
        let a = props.listArticles[i];
        posts.push(
            <Col >
                <Card>
                    <Card.Img variant="top" src={a.src} />
                    <Card.Body>
                        <Card.Title>{a.title}</Card.Title>
                        <Card.Text>{a.preview} </Card.Text>
                        <Card.Text> <small >{a.createDate}</small></Card.Text>
                    </Card.Body>
                </Card>
            </Col>)
               
    }

    return (
        <>
            <Row xs={4} md={2} className="g-4"> 
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
export default Articles;