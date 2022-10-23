import "./css/Overlay.css"

function Overlay(props) {
    return 
    (<div className="overlay">
        <div className="content">
            <h1 className="overlay-title">{props.title}</h1>
            <p className="overlay-content">{props.content}</p>
        </div>
    </div>);
}

export default Overlay;