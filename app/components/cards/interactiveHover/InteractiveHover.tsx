"use client";
import styles from "./page.module.css";
import { useState } from "react";

var html = 
`<div className="card-holder">
  <div className="card">1</div>
  <div className="card">2</div>
  <div className="card">3</div>
  <div className="card">4</div>
  <div className="card" style={{ borderRight: "1px solid whitesmoke" }}>5</div>
</div>`;

var css = 
`.card-holder {
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
  border: 1px solid whitesmoke;
  border-right: 0px;
  background: #f5f5f540;
  cursor: pointer;
  transition: 350ms ease-in-out;
}

.card:nth-child(even) {
  background: #f5f5f5;
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
        <div className={styles.card}>1</div>
        <div className={styles.card}>2</div>
        <div className={styles.card}>3</div>
        <div className={styles.card}>4</div>
        <div
          className={styles.card}
          style={{ borderRight: "1px solid whitesmoke" }}
        >5</div>
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
