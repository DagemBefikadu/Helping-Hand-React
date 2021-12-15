import { useEffect, useState } from 'react'
import { Route, Routes } from "react-router-dom";

function Profile() {

    // console.log('these are the favorite props', props);
    const [userItems, setUserItems] = useState ([])
    // const handleClick = (item) => {
    //     if(faves.indexOf(item)===1) {
    //     //push to s tate
    //     //let the first part be faves but at then end add a villager
    //     setFaves([...faves, item])
    //   }
    //   }
    useEffect(() => {
       
        getUserItems()
      }, [])
    
      //get all listings from the db
      const getUserItems = () => {
        fetch('http://localhost:8000/users')
        .then(response=>response.json())
        .then(foundUser=>{
          setUserItems(foundUser.users)
          console.log('all users: ', foundUser.users)
        })
        .catch(err => {
          console.log(err)
        })
      }

      const userProfileList = userItems.map(u => {
        console.log('This is map items',u.favorites)
        return <li>{u.favorites} </li> 
    // // // // //     // return <Profile foundUserItem={u} key={u._id}/>
    })

      
    

//route
return (
      <div>
          {userProfileList}
      </div>
)
}
export default Profile