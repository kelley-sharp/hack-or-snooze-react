import axios from "axios";
import React, { useContext, useState } from "react";
import { API_URL } from "../config";
import { UserContext } from "../context/user_context";
import { Form, Button, Row, Col } from "react-bootstrap";

export const StoryForm = ({ getUserStories }) => {
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
      setTitleField("");
      setAuthorField("");
      setStoryUrlField("");
      setIsSubmitting(false);
      getUserStories();
    } catch (error) {
      setApiError(error.response.data.error.message);
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      style={{ width: "100%" }}
      className="mt-3"
      onSubmit={handleCreateStory}
    >
      {apiError && <p className="text-danger">{apiError}</p>}
      <Row>
        <Col
          xs={12}
          lg={3}
          className="d-lg-flex flex-lg-column justify-content-lg-end"
        >
          <Form.Group controlId="title" className="mb-lg-0">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter the story title"
              value={titleField}
              onChange={(event) => setTitleField(event.target.value)}
              disabled={isSubmitting}
              required
            />
          </Form.Group>
        </Col>
        <Col
          xs={12}
          lg={3}
          className="d-lg-flex flex-lg-column justify-content-lg-end"
        >
          <Form.Group controlId="author" className="mb-lg-0">
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
        </Col>

        <Col
          xs={12}
          lg={3}
          className="d-lg-flex flex-lg-column justify-content-lg-end"
        >
          <Form.Group controlId="url" className="mb-lg-0">
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
        </Col>
        <Col
          xs={12}
          lg={3}
          className="d-lg-flex flex-lg-column justify-content-lg-end align-items-lg-start"
        >
          <Button
            variant="primary"
            type="submit"
            disabled={isSubmitting}
            style={{ marginBottom: 1 }}
            className="border-0"
          >
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
