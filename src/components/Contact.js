import { useState, useEffect } from 'react'
import Feedback from './Feedback'
import NewFeedback from './NewFeedback'
function Contact () {

    //initialize state to hold feedback
    const [allFeedback, setAllFeedback] = useState([])

    //write a function that gets feedbacks from db
    const getFeedback = () => {
        console.log('getting feedback')
        fetch('http://localhost:8000/feedbacks')
        .then(response=>response.json())
        .then(foundFeedbacks=>{
          setAllFeedback(foundFeedbacks)
        })
        .catch(err => {
          console.log(err)
        })
    }

    //write a function that posts feedback to the db
    const createFeedback = (e) => {
        e.preventDefault()
        console.log('form data: ', e.target.review.value)
        let preJSONBody = {
            text: e.target.review.value
        }
        fetch('http://localhost:8000/feedbacks', {
            method: 'POST',
            body: JSON.stringify(preJSONBody),
            headers: {'Content-Type':'application/json'}
        })
        .then(response=> console.log('POST res: ', response))
        .then( () => getFeedback())
        .catch(err=>{console.log(err)})
    }

    //set feedback state when Contact mounts
    useEffect(() => {
        getFeedback()
        console.log('all Feedback: ', allFeedback.feedbacks)
    }, [])

    return (
        <div>
        <NewFeedback createFeedback={createFeedback}/>
        {/* <Feedback allFeedback={allFeedback.feedbacks}/> */}
        </div>
    )
}

export default Contact