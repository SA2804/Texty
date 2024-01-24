import React from "react";
import PropTypes from "prop-types";

// enclose the string in a curly braces + back-ticks +usage of Template literals
function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}
    >
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div>
          <button className=" mx-3" onClick={props.togglemode}>
            <img
              className="moon"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtz36zG2CitYVAdOpySKMhLhLKrTJ2wFckXS9aFQy8NaqalGLy62w7CL7WdzFAtifX3nU&usqp=CAU"
              alt="moon-icon"
              width={35}
            />
          </button>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
