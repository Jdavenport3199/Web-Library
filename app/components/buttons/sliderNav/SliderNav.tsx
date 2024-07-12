"use client";
import styles from "./page.module.css";
import { useState } from "react";

var html = 
`const [translateX, setTranslateX] = useState("-150%");
const handleTranslate = (newTranslateX: any) => {
  setTranslateX(newTranslateX);
};
  
<div className="links">
  <div className="slider" style={{ transform: \`translateX(\${translateX})\` }}></div>
  <button className="button" onClick={() => handleTranslate("-150%")}>1</button>
  <button className="button" onClick={() => handleTranslate("-50%")}>2</button>
  <button className="button" onClick={() => handleTranslate("50%")}>3</button>
  <button className="button" onClick={() => handleTranslate("150%")}>4</button>
</div>`;

var css = 
`.slider {
  position: absolute;
  background: #f5f5f540;
  border: 1px solid #f5f5f5;
  height: 4rem;
  width: 4rem;
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
    height: 4rem;
    width: 4rem;
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
    <div className="item">
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
          1
        </button>
        <button
          className={styles.button}
          onClick={() => handleTranslate("-50%")}
        >
          2
        </button>
        <button
          className={styles.button}
          onClick={() => handleTranslate("50%")}
        >
          3
        </button>
        <button
          className={styles.button}
          onClick={() => handleTranslate("150%")}
        >
          4
        </button>
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
