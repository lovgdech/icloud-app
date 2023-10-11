import classnames from "classnames/bind";

import styles from "./HomePage.module.scss";
import SectionUploads from "../components/SectionUploads";
const cx = classnames.bind(styles);

function HomePage() {
  return (
    <div className={cx("wrapper")}>
      <h2>File Upload</h2>
      <p>
        1,120 inspirational designs, illustrations, and graphic elements from
        the world’s best designers. <br />
        Want more inspiration? Browse our search results...
      </p>

      <div className={cx("content")}>
        <SectionUploads
          title="Upload Files"
          description="Experience the joy of having all your content organized in one central place that’s completely under your control and accessible from anywhere."
          icon={
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
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
          }
        />
        <SectionUploads
          title="Files Uploaded"
          description="Experience the joy of having all your content organized in one central place that’s completely under your control and accessible from anywhere."
          icon={
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
                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
              />
            </svg>
          }
        />
      </div>
    </div>
  );
}

export default HomePage;
