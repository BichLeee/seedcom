import "./IconButton.scss";
import classNames from "classnames";

const defaultIcon = (
  <img src="./default-icon.png" className="default-icon" alt="default-icon" />
);

function IconButton({
  title,
  onClick,
  className,
  active = false,
  icon = defaultIcon,
}) {
  const classes = classNames(
    "iconbutton-wrapper",
    className,
    active ? "active" : ""
  );

  return (
    <button className={classes} onClick={onClick}>
      <span>{icon}</span>
      <div className="button-title">{title}</div>
    </button>
  );
}

export default IconButton;
