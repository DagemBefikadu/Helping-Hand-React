import React from 'react'

export default function ItemList(props) {
    return (
        <div>
            <ul>
                <li>
                    {props.listItem.name}
                    <br />
                    <img src={props.listItem.image} alt="" />
                </li>
            </ul>
        </div>
    )
}
