function Feedback (props) {
        console.log('Feedback props: ', props)

    if (props.user && props.feedback.owner._id === props.user._id){
        return (
            <div className="feedbackContainer">
               <div ><p>{props.feedback.text}</p></div>
               <h5>{props.feedback.owner.name}</h5>
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