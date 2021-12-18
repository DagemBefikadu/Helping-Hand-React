import ItemDetail from "./ItemDetail"
import ItemList from "./ItemList"

export default function AllListing (props) {
    const listings = props.allItems.map((l) => {
        console.log(l)
        return <div>
        <ItemList listItem={l} />
        </div>
    })

    return (
        <div>
            {listings}
        </div>
    )
}

