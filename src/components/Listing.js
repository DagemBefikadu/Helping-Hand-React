
import React from 'react'
import { Link } from 'react-router-dom'


export default function Listing(props) {
    return (
        <div>
            <ul>
                <li>
                    <Link to={`/listeditems/${props.listing._id}`}>{props.listing.name}</Link>
                    <br />
                    <img src={props.listing.image} alt="" />
                    <br />
                </li>
            </ul>
        </div>
    )
}