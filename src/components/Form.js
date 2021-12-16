import { useState ,useEffect} from 'react'
import axios from 'axios'


function Form(props) {
    console.log('I am a form prop', props)
    const [newItem, setNewItem] = useState([])

    // const getItems = () => {
    //     axios({
    //       url: 'http://localhost:8000/items',
    //       method: 'GET',
    //     //   headers: {
    //     //     'Authorization': `Token token=${props.user.token}`
    //     //   }
    //     })
    //       .then(foundItem => {
    //         // console.log('hello items', foundItem.data.items)
    //         setNewItem(foundItem.data.items)
    //       })
    //       .catch((error) => {
    //         console.error(error)
    //       })
    //   }
    
    //   useEffect(() => {
    //     props.refreshItem()
    //   }, [])


    //write a function that posts feedback to the db
    const createItem = (e) => {
        e.preventDefault()
        console.log('form data: ', e.target.value)
        console.log('name: ', e.target.name.value )
        console.log('description: ', e.target.description.value )
        console.log('location: ', e.target.location.value )
        console.log('category: ', e.target.category.value )
        console.log('owner: ', props.user._id )
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
                owner: props.user._id           
			},
		},
	})
    .then(res => console.log('server response:', res))
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
   
    <div>
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
                <label htmlFor ='zipcode'>:</label>
                <input type='number' name='zipcode' id='zipcode' 
                  value={newItem.zipcode}/>
            </div>
            <div>
                <label htmlFor ='category'>Category:</label>
                <input type='test' name='category' id='category' 
                  value={newItem.category}/>
            </div>
             {/* <div>
                <label htmlFor ='image'>Upload Image:</label>
                <input type="file" onChange={onFileChange} />
                <button onClick={onFileUpload}></button>
                </div>  */}

           <input type="submit" value="Post"/>
         </form>
         </div>
    )
}


export default Form