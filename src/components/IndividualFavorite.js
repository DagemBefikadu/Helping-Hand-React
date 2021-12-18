import Listing from "./Listing"
import {  Button } from "react-bootstrap/";

export default function IndividualFavorite (props) {
    const listings = props.allItems.map((l) => {
        console.log(l)
        return <div>
        <Listing listing={l} />
        <Button  className="mt-2"variant="outline-danger" onClick={() => props.deleteClick(l._id)}>DeleteFav</Button>
        </div>
    })

    return (
        <div>
            <p>Listing of all my Favorites: </p>
            {listings}
        </div>
    )
}