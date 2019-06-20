import React, { Fragment, useState, useContext, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const {
    addContact,
    updateContact,
    current,
    contacts,
    clearCurrent
  } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal",
        address: "",
        notes: ""
      });
    }
  }, [contactContext, current, contacts]);

  const [contact, setContact] = useState({
    type: "personal",
    name: "",
    phone: "",
    email: "",
    notes: "",
    address: ""
  });

  const onChange = e => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });
  };
  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
  };

  const clearContact = () => {
    clearCurrent();
  };
  return (
    <Fragment>
      <h2>{current === null ? "Add Contact" : "Edit Contact"}</h2>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="contactName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={onChange}
            name="name"
            value={contact.name || ""}
            type="text"
            placeholder="Contact Name"
          />
        </Form.Group>
        <Form.Group controlId="type">
          <Form.Label>Relationship Type</Form.Label>
          <Form.Control
            as="select"
            onChange={onChange}
            name="type"
            value={contact.type || ""}
          >
            <option>Personal</option>
            <option>Professional</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            onChange={onChange}
            name="phone"
            value={contact.phone || ""}
            type="text"
            placeholder="Phone Number"
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            onChange={onChange}
            name="email"
            value={contact.email || ""}
            type="email"
            placeholder="Email Address"
          />
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>Physical Address</Form.Label>
          <Form.Control
            onChange={onChange}
            name="address"
            value={contact.address || ""}
            type="text"
            placeholder="Physical Address"
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Extra Notes</Form.Label>
          <Form.Control
            onChange={onChange}
            name="notes"
            value={contact.notes}
            type="text"
            placeholder="Extra Notes"
            as="textarea"
            rows="3"
          />
        </Form.Group>
        <Button type="submit" variant="primary" size="lg" block>
          {current === null ? "Add Contact" : " Update Contact"}
        </Button>
        {current && (
          <Button
            onClick={clearContact}
            type="submit"
            variant="secondary"
            size="lg"
            block
          >
            Clear Contact
          </Button>
        )}
      </Form>
    </Fragment>
  );
};

export default ContactForm;
