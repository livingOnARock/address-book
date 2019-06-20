import React, { useContext, useEffect } from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../../context/contact/ContactFilter";
import AuthContext from "../../context/auth/authContext";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <Container style={{ marginTop: "2rem" }}>
      <Row>
        <Col>
          <ContactForm />
        </Col>
        <Col>
          <Row>
            <ContactFilter />
          </Row>
          <Row>
            <Col
              style={{ height: "75vh", overflow: "scroll", marginTop: "2rem" }}
            >
              <Contacts />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
