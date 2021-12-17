import { useState, useEffect } from 'react'
import axios from 'axios'

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
                  })
                  .catch((error) => {
                    console.error(error)
            })
        }
        useEffect(() => {
            getCreatedItems()
            console.log('all of userListings: ', )
        }, [])
    return (
        <div>
            <h1>My Listings:</h1>
            {createdListing}
        </div>
    )
}


export default CreatedListings