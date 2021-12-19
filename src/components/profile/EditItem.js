import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import apiUrl from '../../apiConfig';
import { Form, Button, Container } from "react-bootstrap/";


function EditItem(props) {
    const formButtonColor = {
		border: '#bf98a0',
		backgroundColor: '#bf98a0', 
        outline: 'None'
	}

    //save instance of useNavigate
    const navigate = useNavigate()
    //grab item id from url params
    const oldItemId = useParams()
    console.log('Old ItemId: ', oldItemId)

    //store the item matching url params
    const [oldItem, setOldItem] = useState({})

    useEffect(() => {
        getEditItem()
    }, [])

    //get listing from the db whose id matches :id param
    const getEditItem = () => {
        axios({
            url: apiUrl + `/items/${oldItemId.id}`,
            method: 'GET',
        })
            .then(res => {
                console.log('get Edit ITEM server response:', res)
                setOldItem(res.data.item)
            })
            .catch(err => console.log(err))

    }

    //helper method for maintaining form charaters
    const handleChange = (e) => {
        setOldItem({ ...oldItem, [e.target.name]: e.target.value })
    }

    //patch the current item with the form data
    const editItem = (e) => {

        e.preventDefault()
        axios({
            url: apiUrl + `/items/${oldItem._id}`,
            method: 'PATCH',
            // headers: {
            //     //add auth once nav to this page is established 
            //     Authorization: `Token token=${props.user.token}`,
            // },
            data: {
                items: {
                    name: e.target.name.value,
                    description: e.target.description.value,
                    location: e.target.location.value,
                    zipcode: e.target.zipcode.value,
                    category: e.target.category.value,
                    image: e.target.image.value
                },
            },
        })
            .then(res => {
                console.log('server response:', res)
            })
            .then(() => {
                e.target.name.value = ''
                e.target.description.value = ''
                e.target.location.value = ''
                e.target.zipcode.value = ''
                e.target.category.value = ''
                navigate(`/listeditems/${oldItem._id}`)
            })
            .catch(err => console.log(err))
    }

    return (
        <Container>
        <h1 className="mt-3">Edit Listing:</h1>
        <Form onSubmit={editItem} className="mt-3">
            <Form.Group>
                <Form.Label htmlFor='name'>Name:</Form.Label>
                <Form.Control type='text' name='name' id='name' value={oldItem.name} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor='description'>description:</Form.Label>
                <Form.Control type='text' name='description' id='description'
                    value={oldItem.description} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor='location'>location:</Form.Label>
                <Form.Control type='text' name='location' id='location'
                    value={oldItem.location} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor='zipcode'>Zipcode:</Form.Label>
                <Form.Control type='number' name='zipcode' id='zipcode'
                    value={oldItem.zipcode} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor='category'>Category:</Form.Label>
                <Form.Control type='test' name='category' id='category'
                    value={oldItem.category} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor='image'>Upload Image:</Form.Label>
                <Form.Control type="text" name="image" id="image" value={oldItem.image} onChange={handleChange} />
            </Form.Group>

            <Form.Control style={formButtonColor} className=' mt-5' type="submit" value="Post" />
        </Form>
        </Container>
    )

}

export default EditItem