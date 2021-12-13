
function Listing (props) {
    return (
        <div className="listing">
            <h2>Item Name: {props.listing.name}</h2>
            <h3>Category: {props.listing.category}</h3>
            <img src={props.listing.image} alt={props.listing.name}/>
            <h6>{props.listing.description}</h6>
            <h5>{props.listing.zipcode}</h5>
        </div>
    )
}

export default Listing