import Listing from "./Listing"

export default function IndividualFavorite (props) {
    const listings = props.allItems.map((l) => {
        console.log(l)
        return <div>
        <Listing listing={l} />
        <button onClick={() => props.deleteClick(l._id)}>DeleteFav</button>
        </div>
    })

    return (
        <div>
            <p>Listing of all my Favorites: </p>
            {listings}
        </div>
    )
}