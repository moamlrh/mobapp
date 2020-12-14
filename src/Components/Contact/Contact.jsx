import {
  EmailOutlined,
  Facebook,
  GitHub,
  HeadsetMicOutlined,
  LocationOn,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="con-left">
        <h3>
          <LocationOn />
          1485 Pacific St, Brooklyn, NY 11216 USA
        </h3>
        <div className="emil-num">
          <h3>
            <EmailOutlined />
            support@mobileapp.com
          </h3>
          <h3>
            <HeadsetMicOutlined />
            518-3636-2800
          </h3>
        </div>
      </div>
      <div className="con-right">
        <Facebook />
        <GitHub />
        <Twitter />
      </div>
    </div>
  );
};

export default Contact;
