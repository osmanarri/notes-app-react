import {React, useState} from "react"
import notes from "../notes";

import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

// function to call it inside the map function
// function createNote(osman){

//     return <Note
//         // unique id for each card component
//         id={osman.id}
//         key={osman.id}
//         title={osman.title}
//         content={osman.content}
       
        
//     />
// }

export default function App(){

    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
      setNotes(prevNotes => {
        return [...prevNotes, newNote];
      });
    }
  
    function deleteNote(id) {
      setNotes(prevNotes => {
        return prevNotes.filter((noteItem, index) => {
          return index !== id;
        });
      });
    }
  
    return (
      <div>
        <Header />
        <CreateArea onAdd={addNote} />
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
        <Footer />
      </div>
    );
}