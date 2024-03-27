import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      {/* <Link to="/dragdroplist">DragDropList</Link>
        <Link to="/searchfilter">SearchFilter</Link>
        <Link to="/colorswitcher">ColorSwitcher</Link>
        <Link to="/todolist">TodoList</Link> */}
      {/* <Link to="/charactercounter">CharacterCounter</Link> */}
      {/* <Link to="/togglevisibility">ToggleVisibility</Link>
        <Link to="/inputfield">InputField</Link> */}
      {/* <Link to="/userposts">UserPosts</Link> */}
      {/* <Link to="/validatedinput">ValidatedInput</Link> */}
      <Link to="/countdowntimer">CountdownTimer</Link>
      <Link to="/windowsize">WindowSize</Link>
    </nav>
  );
}

export default Navbar;
