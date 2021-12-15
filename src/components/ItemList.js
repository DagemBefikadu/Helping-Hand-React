import React from 'react'
import { Link } from 'react-router-dom'


export default function ItemList(props) {
    return (
        <div>
            <ul>
                <li>
                    <Link to={`/listeditems/${props.listItem._id}`}>{props.listItem.name}</Link>
                    <br />
                    <img src={props.listItem.image} alt="" />
                    <br />
                </li>
            </ul>
        </div>
    )
}
