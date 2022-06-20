import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="ui four item menu">
      <NavLink to="/universe" className="item" target="_blank">
        Universe
      </NavLink>
      <NavLink to="/carracing" className="item" target="_blank">
        Car racing
      </NavLink>
      <NavLink to="/games" className="item" target="_blank">
        Games
      </NavLink>
      <NavLink to="/dataeng" className="item" target="_blank">
        Data Engineering
      </NavLink>
    </div>
  );
};

export default Navbar;
