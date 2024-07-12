"use client";
import styles from "./page.module.css";
import { useState } from "react";

var html = `const [translateX, setTranslateX] = useState("-150%");
const handleTranslate = (newTranslateX: any) => {
  setTranslateX(newTranslateX);
};
  
<div className="links">
  <div className="slider" style={{ transform: \`translateX(\${translateX})\` }}></div>
  <button className="button" onClick={() => handleTranslate("-150%")}>&middot;</button>
  <button className="button" onClick={() => handleTranslate("-50%")}>&middot;</button>
  <button className="button" onClick={() => handleTranslate("50%")}>&middot;</button>
  <button className="button" onClick={() => handleTranslate("150%")}>&middot;</button>
</div>`;

var css = `.slider {
  position: absolute;
  background: #007fff20;
  border: 1px solid #007fff40;
  height: 2.5rem;
  width: 2.5rem;
  z-index: 1;
  border-radius: 100rem;
  transition: transform 0.3s ease;
}

.links {
  display: flex;
  justify-content: center;

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    z-index: 2;
  }
}`;

export default function SliderNav() {
  const [showCode, setShowCode] = useState<boolean>(false);
  const [translateX, setTranslateX] = useState("-150%");
  const handleTranslate = (newTranslateX: any) => {
    setTranslateX(newTranslateX);
  };

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
          <span className="item-title">Slider Nav</span>
        </div>
        <div className={styles.links}>
          <div
            className={styles.slider}
            style={{
              transform: `translateX(${translateX})`,
            }}
          ></div>
          <button
            className={styles.button}
            onClick={() => handleTranslate("-150%")}
          >
            &middot;
          </button>
          <button
            className={styles.button}
            onClick={() => handleTranslate("-50%")}
          >
            &middot;
          </button>
          <button
            className={styles.button}
            onClick={() => handleTranslate("50%")}
          >
            &middot;
          </button>
          <button
            className={styles.button}
            onClick={() => handleTranslate("150%")}
          >
            &middot;
          </button>
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
