import Form from './Form'
import { Link } from 'react-router-dom'
const linkStyle = {
  color: 'black',
  textDecoration: 'none'
}
function Profile(props) {


  //route
  return (
    <>
    <Form refreshItem ={props.refreshItem} user ={props.user} />
      <h1>Hello</h1>
      
    <Link to={{pathname: "/favorites"}}>
        My Favorites
      </Link>
      <div>
      <Link to={{pathname: "/edititem"}}>
        Create a Listing
      </Link>
      </div>
  
    </>
  )
}
export default Profile