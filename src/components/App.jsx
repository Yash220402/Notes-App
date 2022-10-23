import Header from './Header'; 
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';
// import Overlay from './Overlay';
import { useState } from 'react';

// function clipText(s) {
//     if (s.length > 100) {
//         return s.substring(0, 100) + "...";
//     }
//     return s;
// }

function App() {

    const [notes, setNotes] = useState([]);
    // const [showOverlay, setShowOverlay] = useState(false);

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            })
        })
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote}/>
            <div className="content">
                {notes.map((noteItem, index) => {
                return (
                    <Note 
                        key={index}
                        id={index}
                        title={noteItem.title} 
                        content={noteItem.content} 
                        onDelete={deleteNote}
                        // onView={() => setShowOverlay(true)}
                    />)
                })}
            </div>
            <Footer />
        </div>
    );
}

export default App;