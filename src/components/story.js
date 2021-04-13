import { FaRegStar, FaStar } from "react-icons/fa";

export const Story = ({ author, id, url, username, title }) => {
  return (
    <div className="d-flex p-3 pl-4 border-bottom">
      <div className="pr-3">
        <FaRegStar />
      </div>
      <div className="d-flex flex-column justify-content-center">
        <span>{title}</span>
        <span>
          By {author} | posted by: {username}
        </span>
      </div>
    </div>
  );
};
