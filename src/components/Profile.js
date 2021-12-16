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
      <Form refreshItem ={props.refreshItem} user ={props.user} />
      <h1>Hello</h1>
      
    <Link to={{pathname: "/favorites"}}>
        My Favorites
      </Link >

      </div>
  
    

  )
}
export default Profile