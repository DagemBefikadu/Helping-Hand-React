import Form from "./Form"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
function EditItem () {
    
const oldItemId = useParams()
console.log('Old Item: ', oldItemId)

const [oldItem, setOldItem] = useState({})

useEffect(() => {
    getEditItem()
}, [])

 //get al listings from the db
 const getEditItem = () => {
    // fetch(`http://localhost:8000/items/${oldItemId}`)
    // .then(response=>response.json())
    // .then(foundItem=>{
    //   oldItem = foundItem
    //   console.log('found item: ', foundItem)
    // })
    // .catch(err => {
    //   console.log(err)
    // })
    axios({
        url: `http://localhost:8000/items/${oldItemId.id}`,
        method: 'GET',
        // headers: {
        //     Authorization: `Token token=${props.user.token}`,
        // }
    })
    .then(res => { 
        console.log('get Edit ITEM server response:', res)
        setOldItem(res.data.item)
    })
    // .then(() => { 
    //     e.target.review.value = ''
    //     getFeedback() 
    // })
    .catch(err => console.log(err))

  }
    if (oldItem) {
        return (
            <>
            <h1>Edit Item Form</h1>
            <Form item={oldItem}/>
            </>
        )
    } else if (!oldItem) {
        return (
            <>
            <h1>Edit Item Form</h1>
            <Form />
            </>
        )
    }
   
}

export default EditItem