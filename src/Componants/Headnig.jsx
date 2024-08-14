/* eslint-disable */
import classNames from "classnames";
import { Link } from "react-router-dom";

export default function Heading({ className, value1, value2, to, link }) {
  return (
    <div className={classNames("text-center", className)}>
      <h1 className="text-xl md:text-2xl lg:text-4xl   font-bold tracking-tight sm:text-6xl">
        {value1}
      </h1>
      <Link className="text-black underline" to={to}> {value2}</Link>
      {link === "yes" && <span aria-hidden="true"> →</span>}

      {/* <a className="mt-6 text-lg leading-8 text-gray-600 hover:text-blue-500 underline cursor-pointer">
        {value2}
      </a> */}
    </div>
  );
}
