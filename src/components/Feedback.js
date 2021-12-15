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
               <div ><p>{props.feedback.text}</p></div>
           </div>
       )
    }
 
}

export default Feedback