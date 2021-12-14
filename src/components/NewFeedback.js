
function NewFeedback (props) {
    return (
        <>
        <form onSubmit={props.createFeedback}>
        <label htmlFor="review">What Do You Think?</label>
        <input type="text" id="review" name="review" />
        <input type="submit"/>
        </form> 
        </>
    )
}

export default NewFeedback