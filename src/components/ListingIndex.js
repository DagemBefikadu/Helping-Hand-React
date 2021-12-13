import Listing from "./Listing"

function ListingIndex (props) {
    const items = props.listings.map(l => {
       return <Listing listing={l} key={l._id}/>
    })
    return (
        <div className="listingIndex">
            {items}
        </div>
    )

}

export default ListingIndex