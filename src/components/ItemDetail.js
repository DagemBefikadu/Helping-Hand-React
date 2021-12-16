
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
    }

    // const deleteFav = () => {
    //     axios({
    //         url: `http://localhost:8000/items/favorites/${newParam.id}`,
    //         method: 'DELETE',
    //         headers: {
    //             Authorization: `Token token=${props.user.token}`           
    //         },
    //     })
    //     .then(res => console.log('server response:', res))
    //     .then(() => navigate('/favorites'))
    //     .catch(err => console.log(err))
    // }

    // const favButton = () => {
    //     console.log('return a single fav',newParam)
    //     if (newParam === props.user.favorites) {
    //         deleteFav()
    //     } else {
    //         createFav()
    //     }
    // }

    // const filteredFav = props.user.favorites.filter(f => {
    //     return 
    // })

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
            {/* <button onClick={deleteFav}>Delete Fav</button> */}
            {/* <button onClick={ props.user.favorites.includes(newParam.id) ? deleteFav : createFav}>{props.user.favorites.includes(newParam.id) ? 'Delete Fav' : 'Fave Me'}</button> */}
        </div>
    )
}


// let newParam = useParams()
// let content = props.singleItem ? props.singleItem[newParam.id] : 'error'
