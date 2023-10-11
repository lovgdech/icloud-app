import { Link, useNavigate } from "react-router-dom";
import classnames from "classnames/bind";

import styles from "./LoginPage.module.scss";
import videoUrl from "../assets/login-video.mp4";
import Button from "../UI/Button";
const cx = classnames.bind(styles);

function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className={cx("wrapper")}>
      <p className={cx("logo")}>
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

      <video
        playsinline="true"
        autoplay="true"
        loop="true"
        muted="true"
        width="100%"
      >
        <source src={videoUrl} type="video/webm" />
        <source src={videoUrl} type="video/mp4" />
      </video>

      <div className={cx("form-container")}>
        <form>
          <h2>Sign in to iCloud</h2>

          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-google"
              viewBox="0 0 16 16"
            >
              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
            </svg>
            <p>Sign in with Google</p>
          </Button>

          <hr />

          <div className={cx("form-group")}>
            <label htmlFor="id">Username or Email</label>
            <input type="text" name="id" />
          </div>

          <div className={cx("form-group")}>
            <label htmlFor="password">
              <p>Password</p>
              <Link to="password-reset">Forget?</Link>
            </label>
            <input type="password" name="password" />
          </div>

          <Button className={cx("submit-btn")} type="submit">
            Sign in
          </Button>

          <p className={cx("sub-title")}>
            Don't have an account? <Link to="signup">Sign up</Link>
          </p>
        </form>
      </div>

      <button className={cx("back-btn")} onClick={() => navigate("/")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-left-square"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
          />
        </svg>
      </button>
    </div>
  );
}

export default LoginPage;
