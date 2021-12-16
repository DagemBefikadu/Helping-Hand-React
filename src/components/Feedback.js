function Feedback (props) {

    if (props.user && props.feedback.owner === props.user._id){
        return (
            <div className="feedbackContainer">
               <div ><p>{props.feedback.text}</p></div>
               <button onClick={() => props.deleteFeedback(props.feedback._id)}>Delete</button>
           </div>
       )
    } else {
        return (
            <div className="feedbackContainer">
                <p>{props.feedback.text}</p>
                <h5>{props.feedback.owner.name}</h5>
           </div>
       )
    }
 
}

export default Feedback