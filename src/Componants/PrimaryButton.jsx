/* eslint-disable */
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

export default function PrimaryButton({ className, name, to }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    }
  };  

  return (
    <div className="w-full">
      <button
        type="button"
        className={classNames(
          "flex w-full justify-center rounded-md bg-orange-500 px-3 py-4 leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
          className
        )}
        onClick={handleClick}
      >
        {name}
      </button>
    </div>
  );
}
