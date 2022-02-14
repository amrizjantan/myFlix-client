import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import "./registration-view.scss";
import {
  Card,
  CardGroup,
  Container,
  Form,
  Button,
  Container,
  Col,
  Row,
} from "react-bootstrap";

export function RegistrationView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [Birthday, setBirthday] = useState("");

  // Modify state of MainView to be registered and logged in with new user
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, email, Birthday);
    props.onRegistration(username);
  };

  return (
    <Container>
      <Row>
        <Col>
          <CardGroup>
            <Card>
              <Card.Body>
                <Card.Title>Registration</Card.Title>
                <Form>
                  <Form.Group>
                    <Form.Label> Username: </Form.Label>
                    <Form.Control
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      placeholder="Enter a Username"
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label> Password: </Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={8}
                      placeholder="8 or more characters"
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label> Email:</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Enter Email"
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label> Birthday:</Form.Label>
                    <Form.Control
                      type="date"
                      value={Birthday}
                      onChange={(e) => setBirthday(e.target.value)}
                    />
                  </Form.Group>
                  <br></br>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
}

RegistrationView.propTypes = {
  register: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
  }),
  onRegistration: PropTypes.func,
};
