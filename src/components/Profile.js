import { useEffect, useState } from 'react'
import { Route, Routes } from "react-router-dom";
// import TestProfile from './TestProfile'

function Profile(props) {

    console.log('these are the favorite props', props);
    const [foundUserItems, setFoundUserItems] = useState ([])
    // const handleClick = (item) => {
    //     if(faves.indexOf(item)===1) {
    //     //push to s tate
    //     //let the first part be faves but at then end add a villager
    //     setFaves([...faves, item])
    //   }
    //   }
    useEffect(() => {
        console.log('getting favorite items')
        getUserItems()
      }, [])
    
      //get all listings from the db
      const getUserItems = () => {
        fetch('http://localhost:8000/users')
        .then(response=>response.json())
        .then(foundUser=>{
          setFoundUserItems(foundUser)
          console.log('all Favorite Items: ', foundUserItems.favorites)
        })
        .catch(err => {
          console.log(err)
        })
      }
    

//route
return (
        <Routes>
            {/* <Route path ="/profile" element={<Profile /> } /> */}
        </Routes>
)
}
export default Profile