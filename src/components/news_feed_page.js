import { MainCard } from "./main_card";
import { FaRegStar, FaStar } from "react-icons/fa";

export const NewsFeedPage = () => {
  return (
    <MainCard title="Recent Stories">
      <div className="d-flex p-3 pl-4 border-bottom">
        <div className="pr-3">
          <FaRegStar />
        </div>
        <div className="d-flex flex-column justify-content-center">
          <span>I'm a story title</span>
          <span>By Kelley Sharp | posted by: Puar Kitty</span>
        </div>
      </div>
    </MainCard>
  );
};
