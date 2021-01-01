import React from "react";
import { Link } from "react-router-dom";

export class Content extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <div className="welcome">
            <b>SQUAD</b>INFO
          </div>
        </h1>
        
        <div className="desc-container">
          <p className="desc">
            SQUADINFO is a tool which allows you to manage and keep track of
            your team members, including the ability to add & delete player
            info. Store player details while having the ability
            to keep track of performance by updating goals and assists as the
            season progresses.
          </p>
          <Link class="getStarted" to="/viewplayers">
           GET STARTED  <i className="fa fa-arrow-right"/>
          </Link>
        </div>
     
      </div>
    );
  }
}
