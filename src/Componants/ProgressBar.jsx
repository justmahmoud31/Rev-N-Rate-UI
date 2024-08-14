/* eslint-disable */

import Heading from "./Headnig";

function ProgressBar(props) {
  return (
    <div className="flex flex-col gap-4">
      <Heading value1={props.barName} className="text-orange-600"></Heading>
      <div className="flex w-full bg-gray-300 rounded-full h-2.5 ">
        <div
          className="bg-orange-500 h-2.5 rounded-full"
          style={{ width: `${props.level}` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
