import Listing from "./Listing"

function TestProfile (props) {
    // const items = props.favorite.map(l => {
    //    return <Listing listing={l} key={l._id}/>
    // })
    return (
        <div className="listingIndex">
            {props.name}
        </div>
    )

}

export default TestProfile