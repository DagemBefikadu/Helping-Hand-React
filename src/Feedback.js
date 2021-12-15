
function Feedback (props) {
    console.log(props)
    //ASK TEAM: getOwner()



    // let index = props.allFeedback.feedbacks.map(f => {
    //     return <div key={f._id}><p>{f.text}</p></div>
    // })
    return (
        <div className="feedbackContainer">
            return <div key={props.feedback._id}><p>{props.feedback.text}</p></div>
        </div>
    )
}

export default Feedback