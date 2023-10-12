import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import classnames from "classnames/bind";

import styles from "./Header.module.scss";
import Button from "../../UI/Button";
const cx = classnames.bind(styles);

function Header() {
  const [menu, setMenu] = useState(true);
  const navigate = useNavigate();

  function toggleMenuHandler() {
    setMenu((pre) => !pre);
  }

  const loginHandler = () => {
    navigate("/login");
  };
  return (
    <header className={cx("wrapper")}>
      <button
        onClick={toggleMenuHandler}
        className={`${cx("menu-btn")} ${menu ? "" : cx("active-btn")}`}
      >
        {menu ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        )}
      </button>

      <p className={cx("logo")} style={!menu ? { marginRight: "auto" } : {}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
          />
        </svg>
        <span>iCloud</span>
      </p>

      <nav className={`${!menu ? cx("menu-active") : ""}`}>
        <ul className={cx("nav-list")}>
          <li>
            <NavLink to="#">Find talent</NavLink>
          </li>

          <li>
            <NavLink to="#">Inspiration</NavLink>
          </li>
          <li>
            <NavLink to="#">Learn design</NavLink>
          </li>
          <li>
            <NavLink to="#">Jobs</NavLink>
          </li>
          <li>
            <NavLink to="#">Go Pro</NavLink>
          </li>
        </ul>
      </nav>

      <div className={cx("auth-btns")}>
        <Button onClick={loginHandler}>Log in</Button>
        <Button className={cx("signup-btn")}>Sign up</Button>
      </div>
    </header>
  );
}

export default Header;
