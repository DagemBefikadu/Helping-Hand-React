import React, { useState } from 'react'
import ItemList from '../ItemList'
import CreatedListings from './CreatedListings'

function UserListing (props) {
    console.log('these are listing props', props)
    const userListings = props.createdListing.map((u) =>{
        console.log('map list', u)
        return<div>
            <ItemList listItem={u} />
            <button onClick={() => props.deleteCreatedItem(u._id)}>Delete Listing</button>
        </div>
    })
    return(
        <div>
            <h1>My Listings:</h1>
            {userListings} 
        </div>
    )
}

export default UserListing