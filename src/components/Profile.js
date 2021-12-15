
import { Link } from 'react-router-dom'
const linkStyle = {
  color: 'black',
  textDecoration: 'none'
}
function Profile(props) {


  //route
  return (
    <>
      <h1>Hello</h1>
      
    <Link to={{pathname: "/favorites"}}>
        My Favorites
      </Link>
  
    </>
  )
}
export default Profile