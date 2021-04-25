import { FaRegStar, FaStar } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user_context";

const prettifyUrl = (url) => {
  //extract a shortened version of the url
  let urlHostname = new URL(url).hostname;
  // remove "www." from it, if included
  if (urlHostname.slice(0, 4) === "www.") {
    urlHostname = urlHostname.slice(4);
  }
  return urlHostname;
};

export const Story = ({ author, id, url, postedByUsername, title }) => {
  const { addToFavorites, deleteFromFavorites, userFavorites } = useContext(
    UserContext
  );

  const [isFavorite, setIsFavorite] = useState(
    userFavorites.some((userFavorite) => userFavorite.storyId === id)
  );

  useEffect(() => {
    if (userFavorites.some((userFavorite) => userFavorite.storyId === id)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [id, userFavorites]);

  const prettyUrl = prettifyUrl(url);

  return (
    <div className="d-flex p-3 pl-4 border-bottom">
      <div className="pr-3" onClick={() => setIsFavorite(!isFavorite)}>
        {isFavorite ? (
          <FaStar onClick={() => deleteFromFavorites(id)} />
        ) : (
          <FaRegStar onClick={() => addToFavorites(id)} />
        )}
      </div>
      <div className="d-flex flex-column justify-content-center">
        <span>{title}</span>
        <span>
          By {author} | posted by: {postedByUsername}
        </span>
        <a href={url}>{`(${prettyUrl})`}</a>
      </div>
    </div>
  );
};
