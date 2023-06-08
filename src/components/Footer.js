import React from 'react';
import styled from 'styled-components';
import Logo from "../images/logo.png";

export const Title = styled.h1`
  font-size: 0.95em;
  font-family: 'Eczar', serif;
`

const Footer = () => (
  <footer className="footer" style={{ textAlign: 'center' }}>
    <img
      src={Logo}
      alt="shop green logo"
      style={{ width: "50px", marginRight: '450px', marginTop:'1px'}}
    />
    <Title style={{ marginTop: '-40px' }}>
      Built by: Donovan Rimer, Brandon Wu, Michael Song
    </Title>
  </footer>
);

export default Footer;