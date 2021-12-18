import { Card } from "react-bootstrap/";
import React from 'react'
import { Link } from 'react-router-dom'


export default function Listing(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                    {/* <Link to={`/listeditems/${props.listing._id}`}>{props.listing.name}</Link> */}
                    {/* <br /> */}
                    <Card.Img variant="top" src={props.listing.image} />
                    <Card.Body>
                    <Card.Title><Link to={`/listeditems/${props.listing._id}`}>{props.listing.name}</Link></Card.Title>
                    </Card.Body>
                    {/* <img src={props.listing.image} alt="" /> */}
                    {/* <br /> */}
            </Card>
        </div>
    )
}