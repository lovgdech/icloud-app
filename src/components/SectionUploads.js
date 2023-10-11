import classnames from "classnames/bind";

import styles from "./SectionUploads.module.scss";
import Card from "../UI/Card";
const cx = classnames.bind(styles);

function SectionUploads({ title, description, icon }) {
  return (
    <Card className={cx("wrapper")}>
      <h2>{title}</h2>
      <p>{description}</p>
      {icon}
    </Card>
  );
}

export default SectionUploads;
