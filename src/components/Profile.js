import axios from 'axios';
import { useEffect, useState } from 'react'
import { Route, Routes } from "react-router-dom";

function Profile(props) {

    // console.log('these are the favorite props', props);
    const [userItems, setUserItems] = useState ([])

    const getUserItems =() => {
    axios({
      url:'http://localhost:8000/users/favorites',
      method:'GET',
      headers: {
         'Authorization': `Token token=${props.user.token}`
      }
    })
        .then(foundUser=>{
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
        console.log('This is map items',u)
        return (
        <li>
          {u.name}
          {u.description} 
          <img src = {u.image}/>
        </li> 
        )
    // // // // //     // return <Profile foundUserItem={u} key={u._id}/>
    })


//route
return (
      <div>
          <h2>My favorite items:</h2>
          {userProfileList}
      </div>
)
}
export default Profile