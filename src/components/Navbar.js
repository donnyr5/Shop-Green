import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';
import {GoogleSignIn, GoogleSignOut, auth} from '../components/GoogleLogin';


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
           List an Item
       </NavLink>
       </NavMenu>
       <GoogleSignOut />
   </Nav>
   </>
);
};

export default Navbar;
