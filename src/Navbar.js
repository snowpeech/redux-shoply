import React from 'react';
import {NavLink} from 'react-router-dom';
import "./styles/Navbar.css"
// import { Navbar } from 'reactstrap';

const Navbar = () =>{
    const ACTIVE_STYLES = {
        fontWeight: "bold",
        color: "#dd9d49",
      };

      
return (<div className="Navbar">
<NavLink exact to="/" activeStyle={ ACTIVE_STYLES }>Home</NavLink>
<NavLink exact to="/cart" activeStyle={ ACTIVE_STYLES }>Cart</NavLink>
</div>)
}

export default Navbar;