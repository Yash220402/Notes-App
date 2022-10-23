import "./css/Note.css"

function Note(props) {

    function handleClick() {
        return props.onDelete(props.id);
    }

    return (
        <div className="note">
            <button onClick={viewNote}>V</button>
            <button onClick={handleClick}>X</button>
            <h2 className="note-title">{props.title}</h2>
            <p className="note-content">{props.content}</p>
        </div>
    );
}

export default Note;