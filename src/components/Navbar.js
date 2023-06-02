import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
   <>
   <Nav>
       <Bars />

       <NavMenu>
       <NavLink to='/home' activeStyle>
           Home
       </NavLink>
       <NavLink to='/shop' activeStyle>
           MyShop
       </NavLink>
       </NavMenu>
       <NavBtn>
       <NavBtnLink to='/logout'>Logout</NavBtnLink>
       </NavBtn>
   </Nav>
   </>
);
};

export default Navbar;
