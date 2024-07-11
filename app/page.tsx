import Image from "next/image";
import styles from "./page.module.css";

var html = String.raw`<div className="card-holder">
  <div className="card">
    <span>1</span>
  </div>
  <div className="card">
    <span>2</span>
  </div>
  <div className="card">
    <span>3</span>
  </div>
  <div className="card">
    <span>4</span>
  </div>
  <div className="card">
    <span>5</span>
  </div>
</div>`;

var css = String.raw`.card-holder {
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
  background: white;
  transition: 350ms ease-in-out;
}
  
.card:nth-child(even) {
  background: whitesmoke;
}

.card:hover {
  flex: 3;
}`;

export default function Home() {
  return (
    <main>
      <div className="container-holder">
        <div className="container">
          <div className="side-nav">
            <button>Buttons</button>
            <button>Layouts</button>
          </div>
          <div className="main">
            <div className="item">
              <span>Interactive Hover Cards</span>
              <div className="card-holder">
                <div className="card">
                  <span>1</span>
                </div>
                <div className="card">
                  <span>2</span>
                </div>
                <div className="card">
                  <span>3</span>
                </div>
                <div className="card">
                  <span>4</span>
                </div>
                <div className="card">
                  <span>5</span>
                </div>
              </div>
              <button>Show Code</button>
              <pre>
                <code>{html}</code>
              </pre>
              <pre>
                <code>{css}</code>
              </pre>
            </div>

            <div className="item">
              <span>Interactive Hover Cards</span>
              <div className="card-holder">
                <div className="card">
                  <span>1</span>
                </div>
                <div className="card">
                  <span>2</span>
                </div>
                <div className="card">
                  <span>3</span>
                </div>
                <div className="card">
                  <span>4</span>
                </div>
                <div className="card">
                  <span>5</span>
                </div>
              </div>
            </div>

            <div className="item">
              <span>Interactive Hover Cards</span>
              <div className="card-holder">
                <div className="card">
                  <span>1</span>
                </div>
                <div className="card">
                  <span>2</span>
                </div>
                <div className="card">
                  <span>3</span>
                </div>
                <div className="card">
                  <span>4</span>
                </div>
                <div className="card">
                  <span>5</span>
                </div>
              </div>
            </div>

            <div className="item">
              <span>Interactive Hover Cards</span>
              <div className="card-holder">
                <div className="card">
                  <span>1</span>
                </div>
                <div className="card">
                  <span>2</span>
                </div>
                <div className="card">
                  <span>3</span>
                </div>
                <div className="card">
                  <span>4</span>
                </div>
                <div className="card">
                  <span>5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
