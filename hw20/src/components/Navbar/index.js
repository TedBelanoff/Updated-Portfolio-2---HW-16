import React from "react";
import "./style.css";

function Navbar() {
  return (
    <div class="row">
    <div class="container-fluid">
        <nav class="navbar navbar-expand-xlg">
          {/* Upper-Left Name and Link to About Page */}
        <a class="navbar-brand" href="./about">Ted Belanoff</a>
          {/* Upper-Right Options and Links to Pages */}
        <ul>
          <li><a class="nav navbar-brand navbar-right" href="./about">About</a></li>    
          <li><a class="nav navbar-brand navbar-right" href="./portfolio">Portfolio</a></li>
          <li><a class="nav navbar-brand navbar-right" href="./contact">Contact</a></li>
        </ul>
        </nav>
    </div>
</div>
  );
}

export default Navbar;
