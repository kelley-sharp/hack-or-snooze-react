import { MainCard } from "./main_card";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { API_URL } from "../config";

export const LoginPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState(null);

  const toggleIsSignup = () => setIsSignup(!isSignup);

  const title = isSignup ? "Sign up" : "Login";

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setApiError(null);

    try {
      const response = await axios.post(API_URL + "/login", {
        user: {
          username,
          password,
        },
      });
      console.log(response.data);
    } catch (error) {
      setApiError(error.response.data.error.message);
      console.log(error.response);
    }

    setIsSubmitting(false);
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setApiError(null);

    try {
      const response = await axios.post(API_URL + "/signup", {
        user: {
          username,
          password,
          name,
        },
      });
      console.log(response.data);
    } catch (error) {
      setApiError(error.response.data.error.message);
      console.log(error.response);
    }

    setIsSubmitting(false);
  };

  return (
    <MainCard title={title}>
      <Form
        style={{ maxWidth: 300 }}
        className="mt-3"
        onSubmit={isSignup ? handleSignup : handleLogin}
      >
        {apiError && <p className="text-danger">{apiError}</p>}
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            disabled={isSubmitting}
            required
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            disabled={isSubmitting}
            required
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
              disabled={isSubmitting}
              required
            />
          </Form.Group>
        )}
        <Button variant="primary" type="submit" disabled={isSubmitting}>
          {title}
        </Button>
        <p className="text-muted">
          Need to {isSignup ? "Login" : "Sign up"}?{" "}
          <Button
            variant="link"
            onClick={toggleIsSignup}
            size="sm"
            className="px-0 pb-1"
            disabled={isSubmitting}
          >
            click here
          </Button>
        </p>
      </Form>
    </MainCard>
  );
};
