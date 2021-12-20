import { Form, Container } from "react-bootstrap/";

function NewFeedback (props) {
    const formButtonColor = {
		border: '#bf98a0',
		backgroundColor: '#bf98a0', 
        outline: 'None'
	}

    return (
        <>
        <Container>
            <Form onSubmit={props.createFeedback}>
            <Form.Group>
            <Form.Label htmlFor="review" className="mb-3 mt-4" ><h5>Tell us how you feel about our app...</h5></Form.Label>
            <Form.Control type="text" id="review" name="review" placeholder="Feedback, comments, testimonials" />
            </Form.Group>
            <Form.Group>
            <Form.Control style={formButtonColor} type="submit"/>
            </Form.Group>
            </Form> 
            </Container>
        </>
    )
}

export default NewFeedback