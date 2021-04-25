import { useState, useEffect, useContext } from "react";
import { MainCard } from "./main_card";
import { Story } from "./story";
import { UserContext } from "../context/user_context";
import { LoadingSpinner } from "./loading_spinner";

export const FavoritesPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { userFavorites, getUserFavorites } = useContext(UserContext);

  useEffect(() => {
    const loadFavorites = async () => {
      await getUserFavorites();
      setIsLoading(false);
    };
    loadFavorites();
  }, [getUserFavorites]);

  return (
    <MainCard title="My Favorite Stories">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        userFavorites.map((userFavorite, idx) => {
          return (
            <Story
              key={idx}
              id={userFavorite.storyId}
              title={userFavorite.title}
              author={userFavorite.author}
              url={userFavorite.url}
              postedByUsername={userFavorite.username}
            />
          );
        })
      )}
    </MainCard>
  );
};
