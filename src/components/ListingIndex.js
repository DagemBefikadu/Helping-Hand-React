import Listing from "./Listing"
import ItemList from "./ItemList"
import UserListing from "./profile/UserListing"

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
             <UserListing />
         </div>
     )

}

export default ListingIndex