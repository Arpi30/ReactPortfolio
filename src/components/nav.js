import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavBar, Name, Toggle, Bar, NavItems } from "./styledComponents/style";

export const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <NavBar>
      <Name>Acs Arpad</Name>
      <NavItems open={open}>
        <Link className="Link" to="/">
          Home
        </Link>
        <Link className="Link" to="project">
          Project
        </Link>
        <Link className="Link" to="about">
          About
        </Link>
        <Link className="Link" to="contact">
          Contact
        </Link>
      </NavItems>
      <Toggle onClick={() => setOpen(!open)}>
        <Bar open={open}></Bar>
      </Toggle>
    </NavBar>
  );
};
