import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Articles(props) {
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
        <Row xs={1} md={2} className="g-4"> 
            {posts}
        </Row>
    );
}
export default Articles;