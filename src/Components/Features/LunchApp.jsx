import React from "react";
import "./LunchApp.css";
import image from "../../assest/image/dualphone.webp";
import rocket from "../../assest/image/rocket.png";

const LunchApp = () => {
  return (
    <div className="lunch-app">
      <div className="left-side">
        <img src={image} alt="dualphone webp" />
      </div>
      <div className="right-side">
        <img src={rocket} alt="ROCKET" />
        <h2>Launch your App</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
          vel exercitationem eveniet vero maxime ratione{" "}
        </p>
        <button>READ MORE</button>
      </div>
    </div>
  );
};

export default LunchApp;
