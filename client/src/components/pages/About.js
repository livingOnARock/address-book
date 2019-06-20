import React from "react";
import Card from "react-bootstrap/Card";

const About = () => {
  return (
    <Card className="w-50 ml-auto mr-auto mt-5">
      <Card.Header>About This App</Card.Header>
      <Card.Body>
        <Card.Title>
          This is an app used to keep all of your contacts. I used the MERN
          stack to build it.
        </Card.Title>
        <Card.Text>
          BootStrap/React-BootStrap, React Router, and Axios were also used in
          making this App
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default About;
