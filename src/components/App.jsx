import React from "react";
import Card from "./Card.jsx";
import contacts from "../contacts.js";
import Avatar from "./Avatar";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      id={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar image="https://i.insider.com/5a281a983339b01f008b4597?width=700" />
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
