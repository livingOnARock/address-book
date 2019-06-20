import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";
import Form from "react-bootstrap/Form";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef("");
  const { filterContacts, clearFilter, filtered } = contactContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = e => {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <Form style={{ padding: "10px 10px 0px 10px", width: "100%" }}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Search Contacts</Form.Label>
        <Form.Control
          type="text"
          ref={text}
          placeholder="Filter Contact"
          onChange={onChange}
        />
      </Form.Group>
    </Form>
  );
};

export default ContactFilter;
