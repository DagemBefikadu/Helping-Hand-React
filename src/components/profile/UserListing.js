import React, { useState } from 'react'
import ItemList from '../ItemList'
import CreatedListings from './CreatedListings'
import { Link } from 'react-router-dom'

function UserListing(props) {
    console.log('these are listing props', props)
    const userListings = props.createdListing.map((u) => {
        console.log('map list', u)
        return <div>
            <ItemList listItem={u} />
            <button onClick={() => props.deleteCreatedItem(u._id)}>Delete Listing</button>
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