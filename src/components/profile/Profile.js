import { Link } from 'react-router-dom'
import Form from './Form'
const linkStyle = {
  color: 'black',
  textDecoration: 'none'
}
function Profile(props) {
  console.log('profile props', props);

  //route
  return (
    <div>
      <Form refreshItem={props.refreshItem} user={props.user} />
      <h1>My Profile</h1>
      <div>
        <Link to={{ pathname: "/favorites" }}>
          My Favorites
        </Link >
      </div>
      <div>
        <Link to={{ pathname: "/mylistings" }}>
          My Listings
        </Link >
      </div>
    </div>
  )
}
export default Profile