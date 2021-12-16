<<<<<<< HEAD
import Form from './Form'
=======
>>>>>>> f8f52e358c1baa8e43ab9653eac8be1885963262
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
<<<<<<< HEAD
    <>
    <Form refreshItem ={props.refreshItem} user ={props.user} />
=======
    <div>
      <Form refreshItem ={props.refreshItem} user ={props.user} />
>>>>>>> f8f52e358c1baa8e43ab9653eac8be1885963262
      <h1>Hello</h1>
      
    <Link to={{pathname: "/favorites"}}>
        My Favorites
<<<<<<< HEAD
      </Link>
      <div>
      <Link to={{pathname: "/edititem"}}>
        Create a Listing
      </Link>
      </div>
  
    </>
=======
      </Link >
   </div>
>>>>>>> f8f52e358c1baa8e43ab9653eac8be1885963262
  )
}
export default Profile