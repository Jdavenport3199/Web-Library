"use client";
import styles from "./page.module.css";
import { useState } from "react";

var html = `<div className="card-holder">
  <div className="card"></div>
  <div className="card"></div>
  <div className="card"></div>
  <div className="card"></div>
  <div className="card" style={{ borderRight: "1px solid #007fff40" }}></div>
</div>`;

var css = `.card-holder {
  width: 100%;
  display: flex;
  justify-content: center;
}

.card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 8rem;
  border: 1px solid #007fff40;
  border-right: 0px;
  background: #007fff20;
  cursor: pointer;
  transition: 350ms ease-in-out;
}

.card:nth-child(even) {
  background: #007fff05;
}

.card:hover {
  flex: 3;
}`;

export default function InteractiveHover() {
  const [showCode, setShowCode] = useState<boolean>(false);

  return (
    <div className="item" style={{ overflow: showCode ? "scroll" : "hidden" }}>
      <div
        className="item-display"
        style={{
          boxShadow: showCode ? "0 6px 8px -4px #00000010" : "none",
          transition: "350ms ease-out",
        }}
      >
        <div className="item-title-holder">
          <span className="item-title">Interactive Hover Cards</span>
        </div>
        <div className={styles.cardHolder}>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div
            className={styles.card}
            style={{ borderRight: "1px solid #007fff40" }}
          ></div>
        </div>
        <div className="button-holder">
          <button
            className="item-button"
            onClick={() => setShowCode(!showCode)}
          >
            Show Code
          </button>
        </div>
      </div>
      <div
        style={{
          height: showCode ? "600px" : "0",
          marginTop: showCode ? "0" : "-4rem",
          padding: "2rem",
          transition: "500ms ease-out",
        }}
      >
        <span>TYPESCRIPT</span>
        <pre>
          <code>{html}</code>
        </pre>
        <br />
        <span>CSS</span>
        <pre>
          <code>{css}</code>
        </pre>
        <br />
        <br />
      </div>
    </div>
  );
}
