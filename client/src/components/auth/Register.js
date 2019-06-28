import React, { useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import AuthContext from "../../context/auth/authContext";

const Register = props => {
  const authContext = useContext(AuthContext);

  const { register, loadUser } = authContext;

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      console.error("Passwords do not match");
    } else {
      register({ name, email, password });
      loadUser();
    }
  };
  return (
    <Container onSubmit={onSubmit} style={{ marginTop: "50px" }}>
      <Row className="justify-content-md-center">
        <Col sm={10} md={8} lg={6}>
          <Form>
            <Form.Group controlId="registerFormName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                onChange={onChange}
                type="text"
                placeholder="Name"
                required
              />
            </Form.Group>

            <Form.Group controlId="registerFormEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                onChange={onChange}
                type="email"
                placeholder="Email"
                required
              />
            </Form.Group>

            <Form.Group controlId="registerFormPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                onChange={onChange}
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>

            <Form.Group controlId="registerFormPasswordConfirm">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                name="password2"
                onChange={onChange}
                type="password"
                placeholder="Confirm Password"
                required
              />
            </Form.Group>

            <Form.Group controlId="registerFormSubmit">
              <Button type="submit" block style={{ marginTop: "50px" }}>
                Sign Up
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
