import { useState ,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Form(props) {
    console.log('I am a form prop', props)
    const [newItem, setNewItem] = useState([])

    const navigate = useNavigate()

    const addCreated = (itemId) => {
        console.log('pushing: ', itemId)
        axios({
            url: `http://localhost:8000/items/mylistings/${itemId}`,
            method: 'PATCH',
            headers: {
                Authorization: `Token token=${props.user.token}`,
            }
        })
        .then(res => console.log('res: ', res))
        .then(() => navigate(`/listeditems/${itemId}`))
        .catch(err => console.log(err))
    }

    //write a function that posts feedback to the db
    const createItem = (e) => {
        e.preventDefault()
        console.log('form data: ', e.target.value)
        console.log('name: ', e.target.name.value )
        console.log('description: ', e.target.description.value )
        console.log('location: ', e.target.location.value )
        console.log('category: ', e.target.category.value )
        // console.log('owner: ', props.user._id )
        console.log('e.target.image.value', e.target.image.value)
    axios({
		url: 'http://localhost:8000/items/',
		method: 'POST',
        headers: {
			Authorization: `Token token=${props.user.token}`,
		},
		data: {
			items: {
				name: e.target.name.value,
                description: e.target.description.value,
                location: e.target.location.value,
                zipcode: e.target.zipcode.value,
                category: e.target.category.value,     
                owner: props.user._id, 
                image: e.target.image.value           
			},
		},
	})
    .then(res => {
        console.log('server response:', res)
        addCreated(res.data.item._id)
    })
    .then(() => { 
        props.refreshItem() 
        e.target.name.value = ''
        e.target.description.value = ''
        e.target.location.value = ''
        e.target.zipcode.value = ''
        e.target.category.value = ''
    })
    .catch(err => console.log(err))
}

    return (
        
   
        <form onSubmit ={createItem}>
            <div>
                <label htmlFor ='name'>Name:</label>
                <input type='text' name='name' id='name' 
       
                  value={newItem.name}/>
            </div>
            <div> 
                <label htmlFor ='description'>description:</label>
                <input type='text' name='description' id='description' 
                  value={newItem.description}/>
            </div>
            <div>
                <label htmlFor ='location'>location:</label>
                <input type='text' name='location' id='location' 
                  value={newItem.location}/>
            </div>
            <div>
                <label htmlFor ='zipcode'>Zipcode:</label>
                <input type='number' name='zipcode' id='zipcode' 
                  value={newItem.zipcode}/>
            </div>
            <div>
                <label htmlFor ='category'>Category:</label>
                <input type='test' name='category' id='category' 
                  value={newItem.category}/>
            </div>
            <div>
                <label htmlFor ='image'>Upload Image:</label>
                <input type="text" name="image" id="image" />
                </div> 

           <input type="submit" value="Post"/>
         </form>
        
    )
}


export default Form