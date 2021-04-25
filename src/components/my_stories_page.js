import { useState, useEffect, useContext, useCallback } from "react";
import { MainCard } from "./main_card";
import { StoryForm } from "./story_form";
import { Story } from "./story";
import { Spinner } from "react-bootstrap";
import { UserContext } from "../context/user_context";
import { API_URL } from "../config";
import axios from "axios";

export const MyStoriesPage = () => {
  const [userStories, setUserStories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { username, token } = useContext(UserContext);

  const getUserStories = useCallback(async () => {
    try {
      const response = await axios.get(
        API_URL + `/users/${username}?token=${token}`
      );
      setUserStories(response.data.user.stories);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      alert("Something went wrong! Please try again");
    }
  }, [token, username]);

  useEffect(() => {
    getUserStories();
  }, [getUserStories, token, username]);

  return (
    <MainCard title="Post a New Story">
      <StoryForm getUserStories={getUserStories} />
      <div className="d-flex flex-column justify-content-end border-bottom mt-4">
        <h2 className="h6">My Stories</h2>
      </div>
      {isLoading ? (
        <Spinner animation="border" variant="dark" />
      ) : (
        userStories.map((userStory, idx) => (
          <Story
            key={idx}
            author={userStory.author}
            id={userStory.storyId}
            title={userStory.title}
            url={userStory.url}
            postedByUsername={userStory.username}
          />
        ))
      )}
    </MainCard>
  );
};
