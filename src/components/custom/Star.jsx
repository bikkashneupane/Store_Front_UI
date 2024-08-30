import { FaRegStar, FaStar } from "react-icons/fa";

import { FaRegStarHalfStroke } from "react-icons/fa6";

const maxRating = 5;

const Stars = ({ stars = 0 }) => {
  const ratings = [];

  if (stars > maxRating) {
    return "Invalid Ratings";
  }

  const fullRating = Math.floor(stars);
  const hasHalf = stars - fullRating;

  for (let i = 0; i < maxRating; i++) {
    if (i < fullRating) {
      ratings.push(<FaStar key={i} className="text-purple-500" />);
    } else if (i === fullRating && hasHalf) {
      ratings.push(<FaRegStarHalfStroke key={i} className="text-purple-500" />);
    } else {
      ratings.push(<FaRegStar key={i} className="text-gray-400" />);
    }
  }

  return <div className="flex">{ratings}</div>;
};

export default Stars;
