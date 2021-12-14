import { useEffect, useState } from 'react'
import { Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import TestProfile from './testprofile';

function Profile() {

    // console.log('this are the props', props);
    let [favorite, setFavorite] = useState ([])
=======
// import TestProfile from './TestProfile'

function Profile(props) {

    console.log('these are the favorite props', props);
    const [foundUserItems, setFoundUserItems] = useState ([])
>>>>>>> b518ce07f6ae8b63e5ffe6c371a9fd8418a7546b
    // const handleClick = (item) => {
    //     if(faves.indexOf(item)===1) {
    //     //push to s tate
    //     //let the first part be faves but at then end add a villager
    //     setFaves([...faves, item])
    //   }
    //   }
    useEffect(() => {
<<<<<<< HEAD
        console.log('getting items', favorite)
        getItems()
      }, [])
    
      //get all listings from the db
     const getItems = () => {
        fetch('http://localhost:8000/items')
        .then(response=>response.json())
        .then(foundItems=>{
          setFavorite(foundItems.items)
       console.log('faves',foundItems);
=======
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
>>>>>>> b518ce07f6ae8b63e5ffe6c371a9fd8418a7546b
        })
        .catch(err => {
          console.log(err)
        })
      }
<<<<<<< HEAD

      const posters = favorite.map(b => {
         <TestProfile favorite={b} key={b.name}/>
      })


    


return (
        <Routes>
            
            <Route path = "/profile"  element={<Profile  favorite={favorite}/> }  />
           {posters}
=======
    

//route
return (
        <Routes>
            {/* <Route path ="/profile" element={<Profile /> } /> */}
>>>>>>> b518ce07f6ae8b63e5ffe6c371a9fd8418a7546b
        </Routes>
)
}
export default Profile