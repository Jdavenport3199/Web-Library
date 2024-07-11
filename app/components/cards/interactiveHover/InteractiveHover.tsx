"use client";
import styles from "./page.module.css";
import { useState } from "react";

var html = `<div className="card-holder">
    <div className="card"></div>
    <div className="card"></div>
    <div className="card"></div>
    <div className="card"></div>
    <div className="card" style={{ borderRight: "1px solid whitesmoke" }}></div>
</div>`;

var css = `.card-holder {
    width: 100%;
    display: flex;
    justify-content: center;
}

.card {
    flex: 1;
    height: 8rem;
    border: 1px solid whitesmoke;
    border-right: 0px solid whitesmoke;
    background: white;
    cursor: pointer;
    transition: 350ms ease-in-out;
}

.card:nth-child(even) {
    background: #f5f5f540;
}

.card:hover {
    flex: 3;
}`;

export default function InteractiveHover() {
  const [showCode, setShowCode] = useState<boolean>(false);

  return (
    <div className="item">
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
          style={{ borderRight: "1px solid whitesmoke" }}
        ></div>
      </div>
      <div className="button-holder">
        <button className="item-button" onClick={() => setShowCode(!showCode)}>
          Show Code
        </button>
      </div>
      <div style={{ display: showCode ? "block" : "none" }}>
        <span>TYPESCRIPT</span>
        <pre>
          <code>{html}</code>
        </pre>
        <br />
        <span>CSS</span>
        <pre>
          <code>{css}</code>
        </pre>
      </div>
    </div>
  );
}
