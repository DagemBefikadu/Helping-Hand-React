import { Card, Button } from "react-bootstrap/";
import React from 'react'
import { Link } from 'react-router-dom'



export default function Listing(props) {
    const cardBackgroundColor = {
		border: '#BCCCE0',
		backgroundColor: '#cdc6d2'
	}

    const buttonStyle = {
		border: '#BCCCE0',
		color: 'white',
		backgroundColor: '#574B60',
        textDecoration: 'None'
	}
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                    {/* <Link to={`/listeditems/${props.listing._id}`}>{props.listing.name}</Link> */}
                    {/* <br /> */}
                    <Card.Img variant="top" src={props.listing.image} />
                    <Card.Body style={cardBackgroundColor}>
                    <Card.Title><Button size= 'm'style={buttonStyle}><Link style={buttonStyle}to={`/listeditems/${props.listing._id}`}>{props.listing.name}</Link></Button></Card.Title>
                    </Card.Body>
                    {/* <img src={props.listing.image} alt="" /> */}
                    {/* <br /> */}
            </Card>
        </div>
    )
}