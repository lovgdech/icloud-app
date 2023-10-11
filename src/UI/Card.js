import classnames from "classnames/bind";

import styles from "./Card.module.scss";
const cx = classnames.bind(styles);

function Card({ children, className, onClick }) {
  return (
    <div onClick={onClick} className={`${cx("wrapper")} ${className}`}>
      {children}
    </div>
  );
}

export default Card;
