import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button, Container, Row, Col} from "react-bootstrap/";


export default function ItemList(props) {
    const buttonStyle = {
		border: '#BCCCE0',
		color: 'white',
		backgroundColor: '#574B60',
        textDecoration: 'None'
	}
    const cardBackgroundColor = {
		border: '#BCCCE0',
		backgroundColor: '#cdc6d2'
	}
    return (
        <div>
            <Container fluid>
                <Row>
                <Col>
                <Card style={{ width: '18rem' }} className='mb-4 mt-4'>
                <Card.Img variant="top" src={props.listItem.image} />
                <Card.Body style={cardBackgroundColor}>
                    <Card.Title><Button size= 'm'style={buttonStyle}><Link style={buttonStyle} to={`/listeditems/${props.listItem._id}`}>{props.listItem.name}</Link></Button></Card.Title>
                </Card.Body>
                    {/* <Link to={`/listeditems/${props.listItem._id}`}>{props.listItem.name}</Link>
                    <br />
                    <img src={props.listItem.image} alt="" />
                    <br /> */}
                </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
