import React from "react";
import { useContacts } from "../contexts/ContactsProvider";
import { ListGroup } from "react-bootstrap";

function Contacts() {
  const { contacts } = useContacts();
  return (
    <ListGroup>
      {contacts?.map((contact) => (
        <ListGroup.Item key={contact.id}>{contact.name}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default Contacts;