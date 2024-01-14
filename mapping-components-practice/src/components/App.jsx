import React from "react";
import Entry from "./entry";
import emojipedia from "../emojipedia";

//1. Create Entry from component
//2. Create props to replace hardcoded data
//3a import the emojipedia const
//3b. Map through the emojipedia array and rencder Entry Components

function createEntry(emojiTerm) {
  return(
    <Entry 
     
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.description}
    />
  )
}

function App() {
  return (
    <div>
      <h1>
        <span >emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createEntry)}
        
      </dl>
    </div>
  );
}

export default App;
