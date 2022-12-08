import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavBar, Name, Toggle, Bar, NavItems } from "./styledComponents/style";

export const Nav = () => {
  const [open, setOpen] = useState(false);

  function closeToggleBar() {
    setOpen(false);
  }

  return (
    <NavBar>
      <Link style={{ textDecoration: "none" }} to="/">
        <Name>Acs Arpad</Name>
      </Link>
      <NavItems open={open}>
        <Link onClick={closeToggleBar} className="Link" to="/">
          Home
        </Link>
        <Link onClick={closeToggleBar} className="Link" to="project">
          Project
        </Link>
        <Link onClick={closeToggleBar} className="Link" to="about">
          About
        </Link>
        <Link onClick={closeToggleBar} className="Link" to="contact">
          Contact
        </Link>
      </NavItems>
      <Toggle onClick={() => setOpen(!open)}>
        <Bar open={open}></Bar>
      </Toggle>
    </NavBar>
  );
};
