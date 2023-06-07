import React from "react";
import Plants1 from "../images/plants1.jpeg";

export const LandingImage = () => {
  return (
    <React.Fragment>
      <img
        src={Plants1}
        alt="landing image"
        style={{ width: "100%", marginRight: "-1", display: "block" }}
      />
    </React.Fragment>
  );
};

