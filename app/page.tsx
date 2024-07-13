"use client";
import { useState } from "react";
import Landing from "./pages/home/Landing";
import InteractiveHover from "./components/cards/interactiveHover/InteractiveHover";
import SliderNav from "./components/buttons/sliderNav/SliderNav";
import SlideReveal from "./components/text/slideReveal/SlideReveal";
import ScrollSlide from "./components/text/scrollSlide/ScrollSlide";
import SiblingsHover from "./components/cards/siblingsHover/SiblingsHover";

export default function Home() {
  const [page, setPage] = useState("home");

  return (
    <main>
      <div className="container-holder">
      <div className="background"></div>
      <div className="overlay"></div>
        {page === "home" ? (
          <Landing page={page} setPage={setPage} />
        ) : page !== "home" ? (
          <div className="container">
            <div className="side-nav">
              <span
                className="item-title"
                style={{
                  padding: "1rem",
                  cursor: "pointer"
                }}
                onClick={() => setPage("home")}
              >
                Web Library
              </span>
              <br />
              <button
                onClick={() => setPage("buttons")}
                style={{
                  background: page === "buttons" ? "#007FFF20" : "",
                  border: page === "buttons" ? "1px solid #007FFF40" : "",
                }}
              >
                <i className="fa-regular fa-circle-check fa-lg"></i>Buttons
              </button>
              <button
                onClick={() => setPage("cards")}
                style={{
                  background: page === "cards" ? "#007FFF20" : "",
                  border: page === "cards" ? "1px solid #007FFF40" : "",
                }}
              >
                <i className="fa-regular fa-address-card fa-lg"></i>Cards
              </button>
              <button
                onClick={() => setPage("forms")}
                style={{
                  background: page === "forms" ? "#007FFF20" : "",
                  border: page === "forms" ? "1px solid #007FFF40" : "",
                }}
              >
                <i className="fa-brands fa-wpforms fa-lg"></i>Forms
              </button>
              <button
                onClick={() => setPage("images")}
                style={{
                  background: page === "images" ? "#007FFF20" : "",
                  border: page === "images" ? "1px solid #007FFF40" : "",
                }}
              >
                <i className="fa-regular fa-image fa-lg"></i>Images
              </button>
              <button
                onClick={() => setPage("layouts")}
                style={{
                  background: page === "layouts" ? "#007FFF20" : "",
                  border: page === "layouts" ? "1px solid #007FFF40" : "",
                }}
              >
                <i className="fa-solid fa-chart-column fa-lg"></i>Layouts
              </button>
              <button
                onClick={() => setPage("tables")}
                style={{
                  background: page === "tables" ? "#007FFF20" : "",
                  border: page === "tables" ? "1px solid #007FFF40" : "",
                }}
              >
                <i className="fa-solid fa-border-none fa-lg"></i>Tables
              </button>
              <button
                onClick={() => setPage("text")}
                style={{
                  background: page === "text" ? "#007FFF20" : "",
                  border: page === "text" ? "1px solid #007FFF40" : "",
                }}
              >
                <i className="fa-solid fa-font fa-lg"></i>Text
              </button>
            </div>

            <div className="main">
              {page === "buttons" ? (
                <>
                  <SliderNav />
                </>
              ) : page === "cards" ? (
                <>
                  <InteractiveHover />
                  <SiblingsHover />
                </>
              ) : page === "forms" ? (
                <>
                  <span className="item-title" style={{ padding: "1rem" }}>
                    Coming Soon...
                  </span>
                </>
              ) : page === "images" ? (
                <>
                  <span className="item-title" style={{ padding: "1rem" }}>
                    Coming Soon...
                  </span>
                </>
              ) : page === "layouts" ? (
                <>
                  <span className="item-title" style={{ padding: "1rem" }}>
                    Coming Soon...
                  </span>
                </>
              ) : page === "tables" ? (
                <>
                  <span className="item-title" style={{ padding: "1rem" }}>
                    Coming Soon...
                  </span>
                </>
              ) : page === "text" ? (
                <>
                  <SlideReveal />
                  <ScrollSlide />
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </main>
  );
}
