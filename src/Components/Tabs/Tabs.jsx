import React, { useState } from "react";
import tabImage from "../../assest/image/tab-graphic.webp";
import "./tabs.css";

const tabsInformations = [
  {
    id: 1,
    logo: tabImage,
    title: "Communicate with ease",
    subtitle:
      "Uniquely underwhelm premium outsourcing with proactive leadership skills. ",
    desc1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eos delectus neque numquam ut libero esse, id unde dolore officia!. Sed eos delectus neque numquam ut libero esse, id unde dolore officia!. Sed eos delectus neque numquam ut libero esse, id unde dolore officia!",
    desc2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eos delectus neque numquam ut libero esse, id unde dolore officia!. Sed eos delectus neque numquam ut libero esse, id unde dolore officia!. Sed eos delectus neque numquam ut libero esse, id unde dolore officia!. Sed eos delectus neque numquam ut libero esse, id unde dolore officia!",
  },
  {
    id: 2,
    logo: tabImage,
    title: "Scheduling when you want",
    subtitle:
      "Uniquely underwhelm premium outsourcing with proactive leadership skills. ",
    desc1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eos delectus neque numquam ut libero esse, id unde dolore officia!. Sed eos delectus neque numquam ut libero esse, id unde dolore officia!. Sed eos delectus neque numquam ut libero esse, id unde dolore officia!",
    desc2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eos delectus neque numquam ut libero esse, id unde dolore officia!. Sed eos delectus neque numquam ut libero esse, id unde dolore officia!. Sed eos delectus neque numquam ut libero esse, id unde dolore officia!. Sed eos delectus neque numquam ut libero esse, id unde dolore officia!",
  },
  {
    id: 3,
    logo: tabImage,
    title: "Realtime Messaging service",
    subtitle:
      "Uniquely underwhelm premium outsourcing with proactive leadership skills. ",
    desc1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eos delectus neque numquam ut libero esse, id unde dolore officia!. Sed eos delectus neque numquam ut libero esse, id unde dolore officia!. Sed eos delectus neque numquam ut libero esse, id unde dolore officia!",
    desc2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eos delectus neque numquam ut libero esse, id unde dolore officia!. Sed eos delectus neque numquam ut libero esse, id unde dolore officia!. Sed eos delectus neque numquam ut libero esse, id unde dolore officia!. Sed eos delectus neque numquam ut libero esse, id unde dolore officia!",
  },
  {
    id: 4,
    logo: tabImage,
    title: "Live chat when you needed",
    subtitle:
      "Uniquely underwhelm premium outsourcing with proactive leadership skills. ",
    desc1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eos delectus neque numquam ut libero esse, id unde dolore officia!. Sed eos delectus neque numquam ut libero esse, id unde dolore officia!. Sed eos delectus neque numquam ut libero esse, id unde dolore officia!",
    desc2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eos delectus neque numquam ut libero esse, id unde dolore officia!. Sed eos delectus neque numquam ut libero esse, id unde dolore officia!. Sed eos delectus neque numquam ut libero esse, id unde dolore officia!. Sed eos delectus neque numquam ut libero esse, id unde dolore officia!",
  },
];
const tabsTitles = [
  { id: 1, text: "Communication" },
  { id: 2, text: "Scheduling" },
  { id: 3, text: "Messages" },
  { id: 4, text: "Live chat" },
];
const Tabs = () => {
  const [indexTab, setIndexTab] = useState(tabsInformations[0]);
  const handleClickTabsTitle = (id) => {
    const tab = document.querySelector(".tabs-info");
    tab.style.opacity = "0";
    setIndexTab(...tabsInformations.filter((i) => i.id === id));
    window.setTimeout(() => {
      tab.style.transition = "all .6s";
      tab.style.opacity = "1";
    }, 100);
  };
  return (
    <div className="tabs">
      <div className="tabs-header">
        {tabsTitles.map((title, i) => (
          <h4
            key={i}
            className={indexTab.id === title.id && "active-tab"}
            onClick={() => handleClickTabsTitle(title.id)}
          >
            {title.text}
          </h4>
        ))}
      </div>
      <div
        className={`tabs-info ${
          indexTab.id % 2 === 0 ? "tabs-info-left" : "tabs-info-right"
        }`}
      >
        <div className="logo">
          <img src={indexTab.logo} alt="the logo of tab" />
        </div>
        <div className="info">
          <h3>{indexTab.title}</h3>
          <span>{indexTab.subtitle}</span>
          <p>{indexTab.desc1}</p>
          <p>{indexTab.desc2}</p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
