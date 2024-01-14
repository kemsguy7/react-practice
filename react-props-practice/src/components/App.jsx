import React from "react";
import styles from "../styles.css";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact) {
  return(
    <Card 
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  )
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar 
      img="https://media.licdn.com/dms/image/D4D03AQGIudUo2fE_sw/profile-displayphoto-shrink_800_800/0/1701769675962?e=2147483647&v=beta&t=qgGN8cUdivwf-0aAmeVoOEJqdnMdVSNByTj1JkfmU2s"
      /> 
      {contacts.map(createCard)}

    </div> 
  );
 }
 
export default App;
