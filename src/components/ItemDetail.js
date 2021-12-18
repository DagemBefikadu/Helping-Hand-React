
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import apiUrl from '../apiConfig'
import { Container, Row, Col, Image, Button} from "react-bootstrap/";


export default function ItemDetail(props) {

    const cardButtonColor = {
		border: '#bf98a0',
		backgroundColor: '#bf98a0', 
        outline: 'None'
	}

    const[singleItem, setSingleItem] = useState([])

    const navigate = useNavigate()

    let newParam = useParams()
    // let content = props.singleItem ? props.singleItem[newParam.id] : 'error'
    // console.log('Here is my single item', content)
    useEffect(() => {
        console.log('getting item')
        getItem()
      }, [])

    const getItem = () => {
        fetch(apiUrl + `/items/${newParam.id}`)
        .then(response=>response.json())
        .then(foundItem => {
            setSingleItem(foundItem.item)
            console.log('singleItem ', foundItem.item.name)
        })
    }

    const createFav = () => {
        if (props.user) {
            axios({
                url: apiUrl + `/items/favorites/${newParam.id}`,
                method: 'PATCH',
                headers: {
                    Authorization: `Token token=${props.user.token}`           
                },
            })
            .then(res => console.log('server response:', res))
            .then(() => navigate('/favorites'))
            .catch(err => console.log(err))
        } else {

        }
    }



    return (
        <div>
            <Container>
                <Row>
                <h1>{singleItem.name}</h1>
                <small>Category: {singleItem.category}</small>
                <br />
                <br />
                <Image src={singleItem.image} alt={singleItem.name} rounded/>
                <p>Item Description: {singleItem.description}</p>
                <small>Item Location: {singleItem.location}</small>
                <small>Zipcode: {singleItem.zipcode}</small>
            <br />
            <Button style={cardButtonColor} className='mb-3' onClick={createFav}>Fave Me</Button>
            </Row>
            </Container>
        </div>
    )
}


// let newParam = useParams()
// let content = props.singleItem ? props.singleItem[newParam.id] : 'error'
