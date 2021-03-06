import { MainCard } from "./main_card";
import axios from "axios";
import { API_URL } from "../config";
import { useState, useEffect } from "react";
import { Story } from "./story";
import { LoadingSpinner } from "./loading_spinner";

export const NewsFeedPage = () => {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getStories() {
      try {
        const response = await axios.get(API_URL + "/stories");
        setStories(response.data.stories);
        setIsLoading(false);
      } catch (error) {
        alert("Something went wrong! Please try again");
      }
    }
    getStories();
  }, []);

  return (
    <MainCard title="Recent Stories">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        stories.map((story, idx) => (
          <Story
            key={idx}
            author={story.author}
            id={story.storyId}
            title={story.title}
            url={story.url}
            postedByUsername={story.username}
          />
        ))
      )}
    </MainCard>
  );
};
