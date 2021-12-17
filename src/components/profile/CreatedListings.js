import { useState, useEffect } from 'react'
import axios from 'axios'
import UserListing from './UserListing'

function CreatedListings(props) {

    const [createdListing, setListing] = useState([])

    const getCreatedItems = () => {
        axios({
            url: 'http://localhost:8000/users/createdItems',
            method: 'GET',
            headers: {
                'Authorization': `Token token=${props.user.token}`
            }
        })
            .then(foundUser => {
                console.log('hello user created route', foundUser)
                const foundUserListing = foundUser.data.users.createdItems
                setListing(foundUserListing)
                // console.log('founduserListing', foundUserListing)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    const deleteCreatedItem = (createdId) => {
        axios({
            url: `http://localhost:8000/users/createdItems/${createdId}`,
            method: 'DELETE',
            headers: {
                Authorization: `Token token=${props.user.token}`,
            }
        })
            .then(res => console.log('server response:', res))
            .then(() => {
                getCreatedItems()
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getCreatedItems()
        console.log('all of userListings: ', createdListing)
    }, [])
    return (
        <div>
            <UserListing createdListing={createdListing} deleteCreatedItem={deleteCreatedItem} />
        </div>
    )
}


export default CreatedListings