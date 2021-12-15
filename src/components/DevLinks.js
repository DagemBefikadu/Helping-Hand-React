
function DevLinks (props) {

    return (
        <div className="aboutMe">
            <img className="headshot" src={props.dev.headshot} alt="headshot" />
            {/* <div>{props.dev.about}</div> */}
            <a href={`mailto:${props.dev.email}`}><img className="logo" alt="GMail" src="http://assets.stickpng.com/images/584856bce0bb315b0f7675ad.png"/></a>
            <a href={props.dev.linkedin}><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn"/></a>
            <a href={props.dev.github}><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className="logo" alt="GitHub"/></a>
            <div>Dino Mantinaos</div>
        </div>
    )
}

export default DevLinks