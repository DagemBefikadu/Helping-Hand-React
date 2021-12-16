import { useState, useEffect } from 'react'
//import children components
import Feedback from './Feedback'
import NewFeedback from './NewFeedback'

//import axios
import axios from 'axios'
function Contact (props) {
console.log('contact', props);
    //initialize state to hold feedback
    const [allFeedback, setAllFeedback] = useState([])

    //write a function that gets feedbacks from db
    const getFeedback = () => {
        console.log('getting feedback')
        fetch('http://localhost:8000/feedbacks')
        .then(response=>response.json())
        .then(foundFeedbacks=>{
          setAllFeedback(foundFeedbacks.feedbacks)
        })
        .catch(err => {
          console.log(err)
        })
    }

    //write a function that posts feedback to the db
    const createFeedback = (e) => {
        e.preventDefault()
        console.log('form data: ', e.target.review.value)
    axios({
		url: 'http://localhost:8000/feedbacks/',
		method: 'POST',
        headers: {
			Authorization: `Token token=${props.user.token}`,
		},
		data: {
			feedback: {
				text: e.target.review.value
			},
		},
	})
    .then(res => console.log('server response:', res))
    .then(() => { 
        e.target.review.value = ''
        getFeedback() 
    })
    .catch(err => console.log(err))
}

    //write a function that deletes feedback
    const deleteFeedback = (fId) => {
    axios({
		url: `http://localhost:8000/feedbacks/${fId}`,
		method: 'DELETE',
        headers: {
			Authorization: `Token token=${props.user.token}`,
		}
	})
    .then(res => console.log('server response:', res))
    .then(() => { 
        getFeedback() 
    })
    .catch(err => console.log(err))
}

    //set feedback state when Contact mounts
    useEffect(() => {
        getFeedback()
        console.log('all Feedback: ', allFeedback.feedbacks)
    }, [])

    let feedbackIndex = allFeedback.map(f => {
        console.log(f)
        return <Feedback feedback={f} user={props.user} deleteFeedback={deleteFeedback} key={f._id}/>
    })

    return (
        <div>
        <NewFeedback createFeedback={createFeedback}/>
        {feedbackIndex}
        </div>
    )
}

export default Contact