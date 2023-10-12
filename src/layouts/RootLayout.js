import { Outlet } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./RootLayout.module.scss";
import Header from "../components/root/Header";
import Footer from "../components/root/Footer";
const cx = classNames.bind(styles);

function RootLayout() {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
