import React, { useState } from 'react'
import ItemList from '../ItemList'
import CreatedListings from './CreatedListings'
import { Link } from 'react-router-dom'
import {  Button } from "react-bootstrap/";

function UserListing(props) {
    const buttonStyle = {
		border: '#BCCCE0',
		color: 'white',
		backgroundColor: '#574B60',
        textDecoration: 'None'
	}

    const buttonDeleteStyle = {
		border: '#4b2f35',
		color: 'white',
		backgroundColor: '#a16875',
        textDecoration: 'None'
	}

    console.log('these are listing props', props)
    const userListings = props.createdListing.map((u) => {
        console.log('map list', u)
        return <div>
            <ItemList listItem={u} />
            <Button className="mx-2" variant="outline-danger" onClick={() => props.deleteCreatedItem(u._id)}>Delete Listing</Button>
            <Button style={buttonStyle}><Link style={buttonStyle} to={`/items/edit/${u._id}`}>Edit</Link></Button>
        </div>
    })
    return (
        <div>
            <h1>My Listings:</h1>
            {userListings}
            {/* <Link to={{ pathname: "/editForm" }}> */}
                {/* Create a Listing
        </Link > */}
        </div>
    )
}

export default UserListing