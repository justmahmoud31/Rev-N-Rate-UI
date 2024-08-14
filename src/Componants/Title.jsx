/* eslint-disable */
import classNames from "classnames";

function Title({title, className}) {
  return <h3 className={classNames(className)}>{title}</h3>;
}

export default Title;
