
function DevLinks (props) {

    return (
        <div className="aboutMe">
            <img className="headshot" src={props.dev.headshot} alt="headshot" />
            {/* <div>{props.dev.about}</div> */}
            <a href={`mailto:${props.dev.email}`}><img className="logo" alt="GMail" src="https://res.cloudinary.com/dunp6efgl/image/upload/v1639970171/hgujdrfnuk5etwkmqtoj.png"/></a>
            <a href={props.dev.linkedin}><img className="logo" src="https://res.cloudinary.com/dunp6efgl/image/upload/v1639969960/vcglzovfnmd5nitznmnl.png" alt="LinkedIn"/></a>
            <a href={props.dev.github}><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className="logo" alt="GitHub"/></a>
            <div>{props.dev.name}</div>
        </div>
    )
}

export default DevLinks