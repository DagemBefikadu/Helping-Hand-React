import {useState} from 'react'
import DevLinks from './DevLinks'

function About () {

    const [dino] = useState({
        name: 'Dino Mantinaos',
        github: 'https://github.com/dinosaur96m',
        email: 'dinomantinaos@gmail.com',
        linkedin: 'https://www.linkedin.com/in/dinomantinaos/',
        headshot: 'https://media-exp1.licdn.com/dms/image/C4D03AQFCxSzMFslW0A/profile-displayphoto-shrink_400_400/0/1552696535840?e=1645056000&v=beta&t=YGY2iIDhaP9rtpuw6bVCSIG9A332eAbm7d3Xxjuq-jk', 
        about: 'A full stack dev with a backround in visual merchandising and philosophy'
    })


    return (
        <DevLinks dev={dino}/>
    )
}

export default About