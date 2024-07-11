"use client";
import InteractiveHover from "./components/cards/interactiveHover/InteractiveHover";
import SliderNav from "./components/buttons/sliderNav/SliderNav";

export default function Home() {
  return (
    <main>
      <div className="container-holder">
        <div className="container">
          <div className="side-nav">
            <span className="item-title">Web Library</span>
            <button>Buttons</button>
            <button>Cards</button>
            <button>Forms</button>
            <button>Images</button>
            <button>Layouts</button>
            <button>Tables</button>
          </div>
          <div className="main">
            <InteractiveHover />
            <SliderNav />
          </div>
        </div>
      </div>
    </main>
  );
}
