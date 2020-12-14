import React, { useEffect } from "react";
import "./LastSection.css";
import image from "../../assest/image/iphonex.webp";
const leftSideParts = [
  {
    title: "Create an Account",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium obcaecati vel exercitationem ",
  },
  {
    title: "Share with friends",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium obcaecati vel exercitationem ",
  },
  {
    title: "Enjoy your life",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium obcaecati vel exercitationem ",
  },
];

const LastSection = () => {
  useEffect(() => {
    const part = document.querySelectorAll(".leftside-parts");
    part.forEach((p) => {
      p.addEventListener("mousemove", (e) => {
        p.children[0].classList.add("active-num");
      });
      p.addEventListener("mouseleave", (e) => {
        p.children[0].classList.remove("active-num");
      });
    });
  }, []);
  return (
    <div className="lastSection">
      <div className="left-side">
        {leftSideParts.map((part, i) => (
          <div className="leftside-parts" key={i}>
            <h1 className="number">{i + 1}</h1>
            <div className="info">
              <h3>{part.title}</h3>
              <p>{part.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="right-side">
        <img src={image} alt="icons" />
      </div>
    </div>
  );
};

export default LastSection;
