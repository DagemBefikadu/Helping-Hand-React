import axios from 'axios';
import { useEffect, useState } from 'react'
import { Route, Routes } from "react-router-dom";
import FavoriteList from './profile/FavoriteList';
import { Link } from 'react-router-dom'
const linkStyle = {
  color: 'black',
  textDecoration: 'none'
}
function Profile(props) {

  // console.log('these are the favorite props', props);
  const [userItems, setUserItems] = useState([])

  const getUserItems = () => {
    axios({
      url: 'http://localhost:8000/users/favorites',
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


  // const handleClick = (item) => {
  //     if(faves.indexOf(item)===1) {
  //     //push to s tate
  //     //let the first part be faves but at then end add a villager
  //     setFaves([...faves, item])
  //   }

  useEffect(() => {

    getUserItems()
  }, [])



  const userProfileList = userItems.map(u => {
    console.log('This is map items', u)
    return (<FavoriteList favoriteItems={u} key={u.name} />)
  })


  //route
  return (
    <div>
      <h1>Hello</h1>
      {/* <Route path ="/favorites" element={<FavoriteList userItems={userItems}/> } /> */}
      {/* <Link to='/favorites' element={<FavoriteList userItems={userProfileList}/> } style={linkStyle}> */}
      {/* My Favorite Items
			</Link> */}
      {/* <Link to={{pathname: "/favorites" userItems ={ userItems }}}> */}
        {/* favorites
      </Link> */}
      {/* <FavoriteList favoriteItems={userProfileList} /> */}
      {/* {userProfileList} */}

    </div>
    //  <div>
    //    <FavoriteList userItems={userItems} />
    //  </div>
  )
}
export default Profile