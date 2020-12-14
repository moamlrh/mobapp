import { Apple, MobileFriendly } from "@material-ui/icons";
import React from "react";
import "./DownloadApp.css";
import apple from "../../assest/image/appleicon.webp";
import play from "../../assest/image/playicon.webp";

const DownloadApp = () => {
  return (
    <div className="download">
      <div className="container-down">
        <MobileFriendly className="mob-icon" />
        <h1>Download Anywhere</h1>
        <p>
          Available for all major mobile and desktop platforms. Rapidiously
          visualize optimal ROI rather than enterprise-wide methods of
          empowerment.
        </p>
        <div className="platform">
          <button>
            <img src={apple} alt="apple icon" />
            APP STORE
          </button>
          <button>
            <img src={play} alt="google play icon" />
            GOOGLE PLAY
          </button>
        </div>
        <span>*Works on iOS 10.0.5+, Android Kitkat and above. </span>
      </div>
    </div>
  );
};

export default DownloadApp;
