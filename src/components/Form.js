import { useState} from 'react'

function Form(props) {

    const [newFaves, setNewFaves] = useState({
        name: '',
        description: '',
        location: '', 
        zipcode: '',
        image: '',
        category: ''
    })

    const handleChange = (e) => {
        setNewFaves({...newFaves, [e.target.name] :e.target.value})
    }

    const postFaves = (e) => {
        e.preventDefault()
        let preJSONBody = {
            
            name: newFaves.name,
            description: newFaves.description,
            location: newFaves.location,
            zipcode: Number(newFaves.zipcode),
            image: newFaves.image,
            category: newFaves.category
        }
        fetch('http://localhost:8000/faves', {
            method: 'POST',
            body: JSON.stringify(preJSONBody),
            headers: { 'Content-Type' : 'application/json'}

    })
    .then(response=> response.json())
    .then(faves=>{
        props.refreshedfaves()
        setNewFaves({
            name: newFaves.name,
            description: newFaves.description,
            location: newFaves.location,
            zipcode: Number(newFaves.zipcode),
            image: newFaves.image,
            category: newFaves.category
        })

    })
    .catch(err=>console.error(err))
    }

    return (
        <form onSubmit={postFaves}>
            <div>
                <label htmlFor ='name'>Name:</label>
                <input type='text' name='name' id='name' 
                onChange ={handleChange}  value={newFaves.name}/>
            </div>
            <div> 
                <label htmlFor ='description'>description:</label>
                <input type='text' name='description' id='description' 
                onChange ={handleChange}  value={newFaves.description}/>
            </div>
            <div>
                <label htmlFor ='location'>location:</label>
                <input type='text' name='location' id='location' 
                onChange ={handleChange}  value={newFaves.location}/>
            </div>
            <div>
                <label htmlFor ='zipcode'>:</label>
                <input type='number' name='zipcode' id='zipcode' 
                onChange ={handleChange}  value={newFaves.reward}/>
            </div>
            <div>
                <label htmlFor ='captured'>Captured:</label>
                <input type='checkbox' name='captured' id='captured' 
                onChange ={handleCheck} checked={newBounty.captured? 'checked':''}/>
            </div>

            <input type="submit" value="Post"/>
        </form>
    )
}



}