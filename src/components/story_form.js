import axios from "axios";
import React, { useContext, useState } from "react";
import { API_URL } from "../config";
import { UserContext } from "../context/user_context";
import { Form, Button } from "react-bootstrap";

export const StoryForm = () => {
  // const [userStories, setUserStories] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [titleField, setTitleField] = useState("");
  const [authorField, setAuthorField] = useState("");
  const [storyUrlField, setStoryUrlField] = useState("");
  const [apiError, setApiError] = useState(null);

  const { token } = useContext(UserContext);

  const handleCreateStory = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setApiError(null);

    try {
      await axios.post(API_URL + `/stories`, {
        token,
        story: {
          title: titleField,
          author: authorField,
          url: storyUrlField,
        },
      });
      setIsSubmitting(false);
    } catch (error) {
      setApiError(error.response.data.error.message);
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      style={{ maxWidth: 300 }}
      className="mt-3"
      onSubmit={handleCreateStory}
    >
      {apiError && <p className="text-danger">{apiError}</p>}
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="enter story title,"
          value={titleField}
          onChange={(event) => setTitleField(event.target.value)}
          disabled={isSubmitting}
          required
        />
      </Form.Group>
      <Form.Group controlId="author">
        <Form.Label>Author</Form.Label>
        <Form.Control
          type="text"
          placeholder="who it was written by"
          value={authorField}
          onChange={(event) => setAuthorField(event.target.value)}
          disabled={isSubmitting}
          required
        />
      </Form.Group>
      <Form.Group controlId="url">
        <Form.Label>Story URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="and add the link"
          value={storyUrlField}
          onChange={(event) => setStoryUrlField(event.target.value)}
          disabled={isSubmitting}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={isSubmitting}>
        Submit
      </Button>
    </Form>
  );
};
