import ItemList from "./ItemList"

export default function AllListing (props) {
    const listings = props.allItems.map((l) => {
        console.log(l)
        return  <ItemList listItem={l} />
    })

    return (
        <div>
            <p>ALL listing go here: </p>
            {listings}
        </div>
    )
}

