import React from "react";

const NavBar = () => {
  const navStyle = {
    backgroundColor: "navy",
    width: "100%",             
    display: "flex",
    justifyContent: "center",  
    alignItems: "center",      
    height: "80px",            
  };

  const headingStyle = {
    margin: "0",   
    color: "white",
    fontFamily: "sans-serif",         
  };

  return (
    <nav style={navStyle}>
      <h1 style={headingStyle}>Student Dashboard</h1>
    </nav>
  );
};

export default NavBar;

