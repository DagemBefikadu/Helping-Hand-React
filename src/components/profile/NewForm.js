import { useState ,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import apiUrl from '../../apiConfig';
import { Form, Button, Row, Col, Container } from "react-bootstrap/";

function NewForm(props) {
    const formButtonColor = {
		border: '#bf98a0',
		backgroundColor: '#bf98a0', 
        outline: 'None'
	}

    console.log('I am a form prop', props)
    const [newItem, setNewItem] = useState([])

    const navigate = useNavigate()

    const addCreated = (itemId) => {
        console.log('pushing: ', itemId)
        axios({
            url: apiUrl + `/items/mylistings/${itemId}`,
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
		url: apiUrl + '/items/',
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
        <Container className='mt-5 mb-4'>
        <h1>Create New Item:</h1>
        <Form onSubmit={createItem} enctype="multipart/form-data">
            <Form.Group>
                <Form.Label className='mb-1 mt-2' htmlFor ='name'>item name:</Form.Label>
                <Form.Control type='text' name='name' id='name' 
       
                  value={newItem.name}/>
            </Form.Group>
            <Form.Group> 
                <Form.Label className='mb-1 mt-1' htmlFor ='description'>description:</Form.Label>
                <Form.Control type='text' name='description' id='description' 
                  value={newItem.description}/>
            </Form.Group>
            <Form.Group>
                <Form.Label className='mb-1 mt-1' htmlFor ='location'>location:</Form.Label>
                <Form.Control type='text' name='location' id='location' 
                  value={newItem.location}/>
            </Form.Group>
            <Form.Group>
                <Form.Label className='mb-1 mt-1' htmlFor ='zipcode'>Zipcode:</Form.Label>
                <Form.Control type='number' name='zipcode' id='zipcode' 
                  value={newItem.zipcode}/>
            </Form.Group>
            <Form.Group>
                <Form.Label className='mb-1 mt-1' htmlFor ='category'>Category:</Form.Label>
                <Form.Control type='category' name='category' id='category' 
                  value={newItem.category}/>
            </Form.Group>
            <Form.Group >
                <Form.Label  className='mb-1 mt-1' htmlFor ='image'>Upload Image:</Form.Label>
                <Form.Control type="text" name="image" id="image" placeHolder= "Paste Image Address Here"/>
            </Form.Group> 
           <Form.Control style={formButtonColor} className=' mt-5' type="submit" value="Post"/>
        </Form>
        </Container>
    )
}


export default NewForm