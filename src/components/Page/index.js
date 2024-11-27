import classNames from "classnames";
import "./Page.scss";

function Page({ className, children }) {
  const classes = classNames("page-wrapper", className);

  return <div className={classes}>{children}</div>;
}

export default Page;
