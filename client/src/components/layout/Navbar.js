import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contact/contactContext";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

const AppNavbar = props => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts } = contactContext;

  const onLogout = () => {
    logout();
    clearContacts();
    props.history.push("/");
  };

  const authLinks = (
    <Fragment>
      <LinkContainer to="/logout">
        <Nav.Link
          className="justify-content-end d-inline-flex"
          onClick={onLogout}
          href="#!"
        >
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Logout</span>
        </Nav.Link>
      </LinkContainer>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <LinkContainer to="/login">
        <Nav.Link>Login</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/register">
        <Nav.Link>Register</Nav.Link>
      </LinkContainer>
    </Fragment>
  );

  return (
    <Navbar bg="primary" variant="dark">
      <Nav className="container">
        <LinkContainer exact to="/">
          <Navbar.Brand>
            <h2>
              <i className="fas fa-address-book " />
              {" Digital Contacts"}
            </h2>
          </Navbar.Brand>
        </LinkContainer>
        <h1 className="d-inline-flex text-white ml-auto">
          {user && `Hello ${user.name}!`}
        </h1>
        <LinkContainer className="ml-auto" to="/about">
          <Nav.Link>About</Nav.Link>
        </LinkContainer>
        <div className="justify-content-end d-inline-flex">
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </Nav>
    </Navbar>
  );
};
AppNavbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

AppNavbar.defaultProps = {
  title: "Contact Keeper",
  icon: "fas fa-id-card-alt"
};

export default AppNavbar;
