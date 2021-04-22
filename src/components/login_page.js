import { MainCard } from "./main_card";
import { useState, useEffect, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { API_URL } from "../config";
import { UserContext } from "../context/user_context";

export const LoginPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const toggleIsSignup = () => setIsSignup(!isSignup);
  const title = isSignup ? "Sign up" : "Login";

  // form fields
  const [usernameField, setUsernameField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const [nameField, setNameField] = useState("");

  // form submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState(null);

  const { setName, setToken } = useContext(UserContext);

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setApiError(null);

    try {
      const response = await axios.post(API_URL + "/login", {
        user: {
          username: usernameField,
          password: passwordField,
        },
      });

      setToken(response.data.token);
      setName(response.data.user.name);
    } catch (error) {
      setApiError(error.response.data.error.message);
      setIsSubmitting(false);
    }
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setApiError(null);

    try {
      const response = await axios.post(API_URL + "/signup", {
        user: {
          username: usernameField,
          password: passwordField,
          name: nameField,
        },
      });
      setToken(response.data.token);
      setName(response.data.user.name);
    } catch (error) {
      setApiError(error.response.data.error.message);
      setIsSubmitting(false);
    }
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
            value={usernameField}
            onChange={(event) => setUsernameField(event.target.value)}
            disabled={isSubmitting}
            required
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={passwordField}
            onChange={(event) => setPasswordField(event.target.value)}
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
              value={nameField}
              onChange={(event) => setNameField(event.target.value)}
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
