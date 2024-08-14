/* eslint-disable */
import classNames from "classnames";

function BrandCard({ className, img, onClick }) {
//   console.log("BrandCard props:", { img, className });

  return (
    <div
      className={classNames(
        "flex w-full h-60 rounded-lg cursor-pointer",
        className
      )}
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={onClick} // handle onClick event
    >
      {/* Optionally, add a fallback text or element to ensure the div is rendered */}
    </div>
  );
}

export default BrandCard;
