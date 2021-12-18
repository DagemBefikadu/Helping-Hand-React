import axios from 'axios';
import { useEffect, useState } from 'react'
import AllListing from '../AllListing';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import IndividualFavorite from '../IndividualFavorite';
import apiUrl from '../../apiConfig';

function FavoriteList(props){
  // console.log('props', props)
  const [userItems, setUserItems] = useState([])

  const navigate = useNavigate()
  let newParam = useParams()

  const getUserItems = () => {
    axios({
      url: apiUrl + '/users/favorites',
      method: 'GET',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      }
    })
      .then(foundUser => {
        console.log('hello fave', foundUser.data.users.favorites)
        const favoriteItems = foundUser.data.users.favorites
        setUserItems(favoriteItems)
        // console.log('all users: ', favoriteItems)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const deleteFav = (id) => {
    console.log('Deleting', id)
    axios({
        url: apiUrl + `/items/favorites/${id}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${props.user.token}`           
        },
    })
    .then(res => {
      getUserItems()
      console.log('server response:', res)
    })
    .then(() => navigate('/favorites'))
    .catch(err => console.log(err))
}


  useEffect(() => {

    getUserItems()
  }, [])

  

return (
<div>
    <h2>My favorites:</h2>
    <IndividualFavorite allItems={userItems} deleteClick={deleteFav}/>
    {/* <button onClick={deleteFav}>Delete Fav</button> */}

</div>
)
}

export default FavoriteList