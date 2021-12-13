
function Listing (props) {
    return (
        <div className="listing">
            <h2>{props.listing.category}</h2>
            <h6>{props.listing.description}</h6>
            <h5>{props.listing.zipcode}</h5>
        </div>
    )
}

export default Listing