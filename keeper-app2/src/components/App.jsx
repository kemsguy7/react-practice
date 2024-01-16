import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"


function App() {
  return (
    <div>
      <Header />
      
        {notes.map((NoteGet) => (
          <Note 
            key = {NoteGet.key}
            title = {NoteGet.title}
            content ={NoteGet.content}
          />   
        ))}
  
      <Footer />
    </div>
  );
}

export default App;
