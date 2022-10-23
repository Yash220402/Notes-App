import { useState } from "react";
import "./css/CreateArea.css"

function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(event) {
        const {name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    return (
        <div className="create-area">
            <input name="title"
                onChange={ handleChange }
                value={ note.title }
                placeholder="Title" />
            <textarea name="content"
                onChange={ handleChange } 
                value={ note.content }
                placeholder="Take a note..." 
                wrap="hard"
                cols="5" rows="5"></textarea>
            <button onClick={submitNote}>+</button>
        </div>
    );
}

export default CreateArea;