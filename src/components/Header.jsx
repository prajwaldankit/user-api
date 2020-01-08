import React from "react";

function Header(props) {
  return (
    <div
      className={
        props.currentState
          ? "heading-container list"
          : "heading-container profile"
      }
    >
      <button
        className={
          props.currentState ? "btn btn-back list" : "btn btn-back profile"
        }
        onClick={e => props.handleClick(e)}
      >
        <span className="back-arrow">&#8592;</span>
      </button>
      <h1 className="heading">
        {props.currentState ? "Employee List" : props.user.firstName}
      </h1>
      ;
    </div>
  );
}

export default Header;
