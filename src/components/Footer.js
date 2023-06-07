import React from 'react';
import styled from 'styled-components';
 
export const Title = styled.h1`
  font-size: 0.95em;
  text-align: center;
  font-family: 'Eczar', serif;
  margin: 12px 0px 10px 10px;
`

const Footer = () => (
    <footer className="footer">
        <Title>
        Built by: Donovan Rimer, Brandon Wu, Michael Song
        </Title>
    </footer>
);
 
export default Footer;