import { Container } from "@material-ui/core";
import { Close, Menu } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./navbar.css";
import {
  handleDownloadBtnClicked,
  handleMenuIconClick,
  scroll,
  handleMenuClick,
} from "./utili";
const menu = ["HOME", "FEATURES", "GALLERY", "PRICING", "CONTACT"];

const Navbar = () => {
  const [stickyNav, setStickyNav] = useState(false);
  const [activeMenu, setActiveMenu] = useState("HOME");
  const [menuIcon, setMenuIcon] = useState(false);
  useEffect(() => {
    scroll(setStickyNav, setActiveMenu);
  }, []);

  return (
    <div className={stickyNav ? "navbar sticky-nv" : "navbar"}>
      <Container>
        <div className="nv-brand">
          <h3>
            MOB<span>APP</span>
          </h3>
        </div>
        <div onClick={() => handleMenuIconClick(setMenuIcon, menuIcon)}>
          {menuIcon ? (
            <Close className="mobile-menu-icon" />
          ) : (
            <Menu className="mobile-menu-icon" />
          )}
        </div>

        <div
          className="nv-items"
          style={{
            height: menuIcon ? "auto" : "0",
          }}
        >
          {menu.map((i) => (
            <h4
              onClick={() => handleMenuClick(i, setMenuIcon)}
              className={activeMenu === i ? "active-menu" : ""}
              key={i}
            >
              {i}
            </h4>
          ))}
          <button onClick={() => handleDownloadBtnClicked(setMenuIcon)}>
            Download
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
