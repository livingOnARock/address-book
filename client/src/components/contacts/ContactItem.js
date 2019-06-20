import Badge from "react-bootstrap/Badge";
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";
import ContactContext from "../../context/contact/contactContext";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);

  const { deleteContact, setCurrent, clearCurrent } = contactContext;
  const { _id, name, type, phone, email, notes, address } = contact;

  const onDelete = () => {
    console.log("deleted");
    deleteContact(_id);
    clearCurrent();
  };

  const onSetCurrent = () => {
    setCurrent(contact);
  };

  return (
    <Card
      border="lightslategray"
      style={{ width: "100%", marginTop: "1.5rem" }}
    >
      <Card.Body style={{ color: "black" }}>
        <Card.Title as="h2">
          {name}{" "}
          <Badge
            as="h3"
            style={{ float: "right", color: "white", padding: "10px" }}
            variant={type === "personal" ? "primary" : "success"}
          >
            {type}
          </Badge>
        </Card.Title>

        <Card.Text
          style={{
            width: "100%",
            margin: "1.5rem 0 0px 0",
            color: " white",
            backgroundColor: "lightslategray",
            fontSize: "large",
            padding: "10px"
          }}
          as="h6"
        >
          Phone Number
        </Card.Text>
        <Card.Text
          style={{
            width: "100%",
            border: "solid lightslategray 1px",
            padding: "10px"
          }}
          as="h3"
        >
          {phone}
        </Card.Text>

        <Card.Text
          style={{
            width: "100%",
            margin: "1.5rem 0 0px 0",
            color: " white",
            backgroundColor: "lightslategray",
            fontSize: "large",
            padding: "10px"
          }}
          as="h6"
        >
          Email
        </Card.Text>
        <Card.Text
          style={{
            width: "100%",
            border: "solid lightslategray 1px",
            padding: "10px"
          }}
          as="h4"
        >
          {email}
        </Card.Text>

        <Card.Text
          style={{
            width: "100%",
            margin: "1.5rem 0 0px 0",
            color: " white",
            backgroundColor: "lightslategray",
            fontSize: "large",
            padding: "10px"
          }}
          as="h6"
        >
          Address
        </Card.Text>
        <Card.Text
          style={{
            width: "100%",
            border: "solid lightslategray 1px",
            padding: "10px"
          }}
          as="h6"
        >
          {address}
        </Card.Text>

        <Card.Text
          style={{
            width: "100%",
            margin: "1.5rem 0 0px 0",
            color: " white",
            backgroundColor: "lightslategray",
            fontSize: "large",
            padding: "10px"
          }}
          as="h6"
        >
          Notes
        </Card.Text>
        <Card.Text
          style={{
            width: "100%",
            border: "solid lightslategray 1px",
            padding: "10px"
          }}
          as="p"
        >
          {notes}
        </Card.Text>

        <Button
          onClick={onSetCurrent}
          variant="secondary"
          className="mr-3 w-25"
        >
          Edit
        </Button>
        <Button onClick={onDelete} variant="danger" className="mr-3 w-25">
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ContactItem;
