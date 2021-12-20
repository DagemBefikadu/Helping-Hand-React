import { Card, Button, Container } from "react-bootstrap/";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'


function Feedback (props) {
        console.log('Feedback props: ', props)
        const cardBackgroundColor = {
            border: '#BCCCE0',
            backgroundColor: '#cdc6d2'
        }
        const cardbodyColor = {
            border: '#e3eaf2',
            backgroundColor: '#e3eaf2'
        }
        

    if (props.user && props.feedback.owner._id === props.user._id){
        return (
            <Container className="feedbackContainer">
                <Card style={cardbodyColor}></Card>
                <Card.Body style={cardBackgroundColor} className="mt-3">
               <div ><p>{props.feedback.text}</p></div>
               <small>{props.feedback.owner.name} </small>
               <Button variant="outline-danger" size="sm" onClick={() => props.deleteFeedback(props.feedback._id)}>Delete <FontAwesomeIcon icon={faTrashAlt} /></Button>
               </Card.Body>
           </Container>
       )
    } else {
        return (
            <Container className="feedbackContainer">
                <Card style={cardbodyColor}>
                <Card.Body style={cardBackgroundColor} className="mt-3">
                <p>{props.feedback.text}</p>
                <small>-{props.feedback.owner.name}</small>
                </Card.Body>
                </Card>
            </Container>
       )
    }
 
}

export default Feedback