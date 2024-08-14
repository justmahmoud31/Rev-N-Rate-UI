/* eslint-disable */
import WhiteStar from "../assets/star_white.png";
import GoldenStar from "../assets/star.png";
function Stars() {
  return (
    <div className="flex gap-4">
      <img className="w-16 h-16 xl:w-20 xl:h-20" src={WhiteStar} alt="" />
      <img className="w-16 h-16 xl:w-20 xl:h-20" src={WhiteStar} alt="" />
      <img className="w-16 h-16 xl:w-20 xl:h-20" src={WhiteStar} alt="" />
      <img className="w-16 h-16 xl:w-20 xl:h-20" src={WhiteStar} alt="" />
      <img className="w-16 h-16 xl:w-20 xl:h-20" src={WhiteStar} alt="" />
    </div>
  );
}

export default Stars;
