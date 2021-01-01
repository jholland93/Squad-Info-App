import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/header.css";

export default function SearchBox(props) {
  return (
    <div>
      <div className="logo"><b>SQUAD</b>INFO</div>
      <div className="searchBox">
          {" "}
          {/* every time theres a change in searchbox - run handleInput function */}
          <input
            onChange={props.handleInput}
            type="search"
            placeholder="search"
          />
          <i class="fa fa-search" />
       
      </div>{" "}
      <Link to="/addplayer" className="buttonContainer">
        <i className="fa fa-plus" />
      </Link>
    </div>
  );
}
