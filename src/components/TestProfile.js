import Profile from "./Profile"

function TestProfile (props) {
    const items = props.favorite.map(l => {
       return <Listing listing={l} key={l._id}/>
    })
    return (
        <div className="listingIndex">
            {items}
        </div>
    )

}

export default TestProfile