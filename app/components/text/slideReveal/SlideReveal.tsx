"use client";
import styles from "./page.module.css";
import { useState } from "react";

var html = 
`<div>
  <div className={styles.intro}>
    <span>Web Library.</span>
  </div>
  <div className={styles.slide}>
    <span>&nbsp;Prebuilt TypeScript Web Assets.</span>
    </div>
</div>`;

var css = 
`.intro {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  background: white;
  z-index: 2;
  animation: reveal 5s infinite;
}

.slide {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  width: 0px;
  animation: slide 5s infinite;
}

@keyframes reveal {
  0% {
    opacity: 0;
  }

  20% {
    opacity: 1;
  }

  80% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes slide {
  0% {
    opacity: 0;
    width: 0px;
  }

  20% {
    opacity: 1;
    width: 0px;
  }

  80% {
    opacity: 1;
    width: 400px;
  }

  100% {
    opacity: 0;
    width: 400px;
  }
}`;

export default function SlideReveal() {
  const [showCode, setShowCode] = useState<boolean>(false);

  return (
    <div className="item">
      <div className="item-title-holder">
        <span className="item-title">Text Slide Reveal</span>
      </div>
      <div>
        <div className={styles.intro}>
          <span>Web Library.</span>
        </div>
        <div className={styles.slide}>
          <span>&nbsp;Prebuilt TypeScript Web Assets.</span>
        </div>
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
