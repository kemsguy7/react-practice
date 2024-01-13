import React from "react";
import styles from "../styles.css";
import Card from "./Card";
import contacts from "../contacts";
function App() {
  return (
    <>
      <h1 className="heading">My Contacts</h1>
      {contacts.length >= 1 && <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />}
      {contacts.length >= 2 && <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />}
      {contacts.length >= 3 && <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />}
      {contacts.length >= 4 && <Card
        name={contacts[3].name}
        img={contacts[3].imgURL}
        tel={contacts[3].phone}
        email={contacts[3].email}
      />}
    </>
  );
 }
 

export default App;
