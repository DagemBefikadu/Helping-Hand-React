
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ItemDetail(props) {

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
        fetch(`http://localhost:8000/items/${newParam.id}`)
        .then(response=>response.json())
        .then(foundItem => {
            setSingleItem(foundItem.item)
            console.log('singleItem ', foundItem.item.name)
        })
    }

    const createFav = () => {
        if (props.user) {
            axios({
                url: `http://localhost:8000/items/favorites/${newParam.id}`,
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
            <container>
                <h1>{singleItem.name}</h1>
                <small>{singleItem.category}</small>
                <br />
                <br />
                <img src={singleItem.image} alt={singleItem.name} />
                <p>{singleItem.description}</p>
                <small>{singleItem.location}</small>
                <small>{singleItem.zipcode}</small>
            </container>
            <br />
            <button onClick={createFav}>Fave Me</button>

        </div>
    )
}


// let newParam = useParams()
// let content = props.singleItem ? props.singleItem[newParam.id] : 'error'
