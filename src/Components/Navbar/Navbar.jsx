import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [stickyNav, setStickyNav] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll' , e => {
      if(document.documentElement.scrollTop > 20){
        setStickyNav(true)
      }else{
        setStickyNav(false)
      }
    })
  },[])
  return (
    <div className={stickyNav ? 'navbar sticky-nv' : 'navbar'}>
      <Container>
        <div className="nv-brand">
          <h3>
            MOB<span>APP</span>
          </h3>
        </div>
        <div className="nv-items">
          <h4>HOME</h4>
          <h4>FEATURES</h4>
          <h4>GALLERY</h4>
          <h4>PRICING</h4>
          <h4>CONTACT</h4>
          <button>Download</button>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
