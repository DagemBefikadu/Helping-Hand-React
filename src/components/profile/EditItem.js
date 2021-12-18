import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import apiUrl from '../../apiConfig';

function EditItem(props) {
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

        <form onSubmit={editItem}>
            <div>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' id='name' value={oldItem.name} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor='description'>description:</label>
                <input type='text' name='description' id='description'
                    value={oldItem.description} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor='location'>location:</label>
                <input type='text' name='location' id='location'
                    value={oldItem.location} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor='zipcode'>Zipcode:</label>
                <input type='number' name='zipcode' id='zipcode'
                    value={oldItem.zipcode} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor='category'>Category:</label>
                <input type='test' name='category' id='category'
                    value={oldItem.category} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor='image'>Upload Image:</label>
                <input type="text" name="image" id="image" value={oldItem.image} onChange={handleChange} />
            </div>

            <input type="submit" value="Post" />
        </form>
    )

}

export default EditItem