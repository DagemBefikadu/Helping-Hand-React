
function Feedback (props) {

    //ASK TEAM: getOwner()



    let index = props.allFeedback.map(f => {
        return <div key={f._id}><p>{f.text}</p></div>
    })
    return (
        <div className="feedbackContainer">
            {index}
        </div>
    )
}

export default Feedback