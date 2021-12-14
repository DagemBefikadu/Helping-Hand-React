import { useEffect, useState } from 'react'
import { Route, Routes } from "react-router-dom";

function Profile() {

    // console.log('this are the props', props);
    let [favorite, setFavorite] = useState ([])
    // const handleClick = (item) => {
    //     if(faves.indexOf(item)===1) {
    //     //push to s tate
    //     //let the first part be faves but at then end add a villager
    //     setFaves([...faves, item])
    //   }
    //   }
    useEffect(() => {
        console.log('getting items')
        getItems()
      }, [])
    
      //get all listings from the db
      const getItems = () => {
        fetch('http://localhost:8000/items')
        .then(response=>response.json())
        .then(foundItems=>{
          setFavorite(foundItems)
          console.log('all Favorite Items: ',favorite )
        })
        .catch(err => {
          console.log(err)
        })
      }
    


return (
        <Routes>
            <Route path ="/profile" element={<Profile /> } />
        </Routes>
)
}
export default Profile