import React from 'react'

export default function ItemDetail(props) {
    const detailItem = props.allItems.map((l) => {
        console.log(l)
        return <div>
        {l.name}
            <img src={l.image} alt="" />
        </div>
    })
    return (
        <div>
            {detailItem}
        </div>
    )
}
