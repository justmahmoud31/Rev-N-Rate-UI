/* eslint-disable */
import RevRateLogo from "../assets/logo.svg";
import classNames from "classnames";

function BrnadHS({ className, img, onClick }) {
  return (
    <div
      className={classNames(
        "flex w-60 mx-2 rounded-lg cursor-pointer",
        className
      )}
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={onClick} // handle onClick event
    ></div>
  );
}

export default BrnadHS;
