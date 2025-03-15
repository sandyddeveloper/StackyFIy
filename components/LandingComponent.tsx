import React from "react";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

const LandingComponent = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default LandingComponent;
