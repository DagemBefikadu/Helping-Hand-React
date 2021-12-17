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
    const [lawrence] = useState({
        name: 'Lawrence Salinas',
        github: 'https://github.com/lawrencesalinas',
        email: '',
        linkedin: '',
        headshot: '',
        about: '',

    })
    const [kelly] = useState({
        name: 'Kelly Larrea',
        github: 'https://github.com/kellylarrea',
        email: 'larreakelly@gmail.com',
        linkedin: 'https://www.linkedin.com/in/kellylarrea/',
        headshot: 'https://media-exp1.licdn.com/dms/image/C4E03AQFi328bhZXJnQ/profile-displayphoto-shrink_800_800/0/1637159506010?e=1645056000&v=beta&t=9tv-zw8vvgRpv3kf2IGzZYtvqkEyEEGuX5cnEGMho5k',
        about: '',

    })
    const [dagem] = useState({
        name: 'Dagem Befikadu',
        github: 'https://github.com/DagemBefikadu',
        email: 'dbefikadu94@gmail.com',
        linkedin: 'https://www.linkedin.com/in/dagembefikadu/',
        headshot: 'https://media-exp1.licdn.com/dms/image/C4E03AQHMAvT9s8_UMg/profile-displayphoto-shrink_800_800/0/1553665237112?e=1645056000&v=beta&t=arDjJftlWQPsO1Li-LvJX0I0t3EImIhCZUwIJrG0BzY',
        about: '',

    })



    return (
    <div id="ourTeam">
        <DevLinks dev={dino}/>
        <DevLinks dev={dagem} />
        <DevLinks dev={kelly} />
        <DevLinks dev={lawrence} />
    </div>
    )
}

export default About