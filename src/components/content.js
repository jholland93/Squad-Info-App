
import React from "react";
import { Link } from "react-router-dom";

export class Content extends React.Component {
  render() {
    return (
      <div >
        <h1>Welcome to SquadInfo!</h1>
        <p>SquadInfo is a tool which allows you to manage and keep track of your team - including the ability to add & delete player info, you can keep
          track of players info and update goals and assists as the season progresses. 

          Wih squad info you can view and edit player details such as the following 
          <ol>
            <li>Player Name</li>
            <li>Position</li>
            <li>Nationality</li>
            <li>Date Of Birth</li>
            <li>Squad Number</li>
            <li>Goals</li>
            <li>Assists</li>
          </ol>
         <Link to="/viewplayers">Get Started</Link>
        </p>
      </div>
    );
  }
}
