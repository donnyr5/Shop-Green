import React, { useState, useRef, useCallback } from "react";
import styled from "styled-components";
import Plants1 from "../images/plants1.jpeg";
import Plants2 from "../images/Plants2.jpeg";

const Credits = styled.div`
  float: right;
  color: #023047;
  margin-right: 10px;
  padding-top: 0.5em;
  font-size: 18px;
  font-family: 'Pontano Sans', sans-serif;
`;

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

