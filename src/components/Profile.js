import { useEffect, useState } from 'react'
import { Route, Routes } from "react-router-dom";
import TestProfile from './testprofile';

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
        })
        .catch(err => {
          console.log(err)
        })
      }

      const posters = favorite.map(b => {
         <TestProfile favorite={b} key={b.name}/>
      })


    


return (
        <Routes>
            
            <Route path = "/profile"  element={<Profile  favorite={favorite}/> }  />
           {posters}
        </Routes>
)
}
export default Profile