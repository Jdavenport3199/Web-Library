"use client";
import styles from "./page.module.css";

type LandingProps = {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
};

function Landing({ page, setPage }: LandingProps) {
  return (
    <div className={styles.container}>
      <h1>Web Library</h1>
      <span>Prebuilt TypeScript Web Assets</span>
      <div className={styles.menu}>
        <button
          className={styles.button}
          onClick={() => setPage("buttons")}
          style={{
            background: page === "buttons" ? "#007FFF20" : "",
            border: page === "buttons" ? "1px solid #007FFF40" : "",
          }}
        >
          <i className="fa-regular fa-circle-check fa-lg"></i>Buttons
        </button>
        <button
          className={styles.button}
          onClick={() => setPage("cards")}
          style={{
            background: page === "cards" ? "#007FFF20" : "",
            border: page === "cards" ? "1px solid #007FFF40" : "",
          }}
        >
          <i className="fa-regular fa-address-card fa-lg"></i>Cards
        </button>
        <button
          className={styles.button}
          onClick={() => setPage("forms")}
          style={{
            background: page === "forms" ? "#007FFF20" : "",
            border: page === "forms" ? "1px solid #007FFF40" : "",
          }}
        >
          <i className="fa-brands fa-wpforms fa-lg"></i>Forms
        </button>
        <button
          className={styles.button}
          onClick={() => setPage("images")}
          style={{
            background: page === "images" ? "#007FFF20" : "",
            border: page === "images" ? "1px solid #007FFF40" : "",
          }}
        >
          <i className="fa-regular fa-image fa-lg"></i>Images
        </button>
        <button
          className={styles.button}
          onClick={() => setPage("layouts")}
          style={{
            background: page === "layouts" ? "#007FFF20" : "",
            border: page === "layouts" ? "1px solid #007FFF40" : "",
          }}
        >
          <i className="fa-solid fa-chart-column fa-lg"></i>Layouts
        </button>
        <button
          className={styles.button}
          onClick={() => setPage("tables")}
          style={{
            background: page === "tables" ? "#007FFF20" : "",
            border: page === "tables" ? "1px solid #007FFF40" : "",
          }}
        >
          <i className="fa-solid fa-border-none fa-lg"></i>Tables
        </button>
        <button
          className={styles.button}
          onClick={() => setPage("text")}
          style={{
            background: page === "text" ? "#007FFF20" : "",
            border: page === "text" ? "1px solid #007FFF40" : "",
          }}
        >
          <i className="fa-solid fa-font fa-lg"></i>Text
        </button>
      </div>
    </div>
  );
}

export default Landing;
