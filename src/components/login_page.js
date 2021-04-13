import { MainCard } from "./main_card";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const LoginPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const toggleIsSignup = () => setIsSignup(!isSignup);

  const title = isSignup ? "Sign up" : "Login";
  return (
    <MainCard title={title}>
      <Form style={{ maxWidth: 300 }}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>
        {isSignup && (
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Form.Group>
        )}
        <Button variant="primary" type="submit">
          {title}
        </Button>
        <p className="text-muted">
          Need to {isSignup ? "Login" : "Sign up"}?{" "}
          <Button
            variant="link"
            onClick={toggleIsSignup}
            size="sm"
            className="px-0 pb-1"
          >
            click here
          </Button>
        </p>
      </Form>
    </MainCard>
  );
};
