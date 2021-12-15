import Listing from "./Listing"
import ItemList from "./ItemList"
function ListingIndex (props) {
    // const items = props.listings.map(l => {
    //    return <Listing listing={l} key={l._id}/>
    // })
    // return (
    //     <div className="listingIndex">
    //         {items}
    //     </div>
    // )
    const items = props.listings.map(l => {
        return  <ItemList listItem={l} key={l.id} />
     })
     return (
         <div className="listingIndex">
             {items}
         </div>
     )

}

export default ListingIndex