import { Link } from 'react-router-dom'
import NewForm from './NewForm'
import { Breadcrumb } from "react-bootstrap/";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faList } from '@fortawesome/free-solid-svg-icons'

const linkStyle = {
  color: 'purple',
  textDecoration: 'none'
}
function Profile(props) {
  console.log('profile props', props);

  //route
  return (
    <div>
      <Breadcrumb className='mt-2'>
      <Breadcrumb.Item>
        <Link to={{ pathname: "/favorites" }} style={linkStyle}>
          My Favorites <FontAwesomeIcon icon={faHeart} />
        </Link >
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to={{ pathname: "/mylistings" }} style={linkStyle}>
          My Listings <FontAwesomeIcon icon={faList} />
        </Link >
      </Breadcrumb.Item>
      </Breadcrumb>
      <h1>{props.user.name}'s Profile</h1>
      <NewForm refreshItem={props.refreshItem} user={props.user} />
    </div>
  )
}
export default Profile