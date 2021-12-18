import { Link } from 'react-router-dom'
import NewForm from './NewForm'
const linkStyle = {
  color: 'purple',
  textDecoration: 'none'
}
function Profile(props) {
  console.log('profile props', props);

  //route
  return (
    <div>
      <h1>{props.user.name}'s Profile</h1>
      <div>
        <Link to={{ pathname: "/favorites" }} style={linkStyle}>
          My Favorites
        </Link >
      </div>
      <div>
        <Link to={{ pathname: "/mylistings" }} style={linkStyle}>
          My Listings
        </Link >
      </div>
      <NewForm refreshItem={props.refreshItem} user={props.user} />
    </div>
  )
}
export default Profile