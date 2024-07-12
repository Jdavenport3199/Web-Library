"use client";
import styles from "./page.module.css";
import { useState } from "react";

var html = `<div className="scrollerBackwards">
  <ul className="scroller">
    <li className="scrollItem">&nbsp;WEB</li>
    <li className="scrollItem">LIBRARY&nbsp;</li>
  </ul>
</div>
<div className="scrollerForwards">
  <ul className="scroller">
    <li className="scrollItem">&nbsp;WEB</li>
    <li className="scrollItem">LIBRARY&nbsp;</li>
  </ul>
</div>`;

var css = `.scrollerForwards {
  width: 100%;
  display: flex;
  justify-content: center;
  animation: scrollForwards linear;
  animation-timeline: scroll(root);
}

.scrollerBackwards {
  width: 100%;
  display: flex;
  justify-content: center;
  animation: scrollBackwards linear;
  animation-timeline: scroll(root);
}

.scroller {
  padding: 0.4rem;
  display: flex;
  gap: 1rem;

  .scrollItem {
    all: unset;
  }
}

@keyframes scrollForwards {
  from {
    transform: translateX(-25%);
  }

  to {
    transform: translateX(25%);
  }
}

@keyframes scrollBackwards {
  from {
    transform: translateX(25%);
  }

  to {
    transform: translateX(-25%);
  }
}`;

export default function ScrollSlide() {
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
          <span className="item-title">Text Page Scroller</span>
        </div>
        <div className={styles.scrollerBackwards}>
          <ul className={styles.scroller}>
            <li className={styles.scrollItem}>&nbsp;WEB</li>
            <li className={styles.scrollItem}>LIBRARY&nbsp;</li>
            <li className={styles.scrollItem}>&nbsp;WEB</li>
            <li className={styles.scrollItem}>LIBRARY&nbsp;</li>
            <li className={styles.scrollItem}>&nbsp;WEB</li>
            <li className={styles.scrollItem}>LIBRARY&nbsp;</li>
            <li className={styles.scrollItem}>&nbsp;WEB</li>
            <li className={styles.scrollItem}>LIBRARY&nbsp;</li>
            <li className={styles.scrollItem}>&nbsp;WEB</li>
            <li className={styles.scrollItem}>LIBRARY&nbsp;</li>
            <li className={styles.scrollItem}>&nbsp;WEB</li>
            <li className={styles.scrollItem}>LIBRARY&nbsp;</li>
            <li className={styles.scrollItem}>&nbsp;WEB</li>
            <li className={styles.scrollItem}>LIBRARY&nbsp;</li>
            <li className={styles.scrollItem}>&nbsp;WEB</li>
            <li className={styles.scrollItem}>LIBRARY&nbsp;</li>
          </ul>
        </div>
        <div className={styles.scrollerForwards}>
          <ul className={styles.scroller}>
            <li className={styles.scrollItem}>&nbsp;WEB</li>
            <li className={styles.scrollItem}>LIBRARY&nbsp;</li>
            <li className={styles.scrollItem}>&nbsp;WEB</li>
            <li className={styles.scrollItem}>LIBRARY&nbsp;</li>
            <li className={styles.scrollItem}>&nbsp;WEB</li>
            <li className={styles.scrollItem}>LIBRARY&nbsp;</li>
            <li className={styles.scrollItem}>&nbsp;WEB</li>
            <li className={styles.scrollItem}>LIBRARY&nbsp;</li>
            <li className={styles.scrollItem}>&nbsp;WEB</li>
            <li className={styles.scrollItem}>LIBRARY&nbsp;</li>
            <li className={styles.scrollItem}>&nbsp;WEB</li>
            <li className={styles.scrollItem}>LIBRARY&nbsp;</li>
            <li className={styles.scrollItem}>&nbsp;WEB</li>
            <li className={styles.scrollItem}>LIBRARY&nbsp;</li>
            <li className={styles.scrollItem}>&nbsp;WEB</li>
            <li className={styles.scrollItem}>LIBRARY&nbsp;</li>
          </ul>
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
