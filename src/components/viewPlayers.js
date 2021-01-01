import React from "react";
import { Players } from "./players";
import axios from "axios";
import "../css/pageStyles.css";
import SearchBox from "./header";
import { Link } from "react-router-dom";

export class ViewPlayers extends React.Component {
  constructor(props) {
    super(props);
    //set state for showing all players & state for showing searched players
    this.state = {
      players: [],
      searchPlayer: "",
    };

    this.ReloadData = this.ReloadData.bind(this);
  }
  //state object contains players object

  //lifecyclye hook - gets called every time componenet is actiove
  componentDidMount() {
    axios
      .get(
        //get data from API
        "http://localhost:4000/api/players"
      )
      //set the state object to contain response data
      .then((response) => {
        this.setState({ players: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  } //end ComponenetDidMount

  ReloadData() {
    axios
      .get(
        //get data from API
        "http://localhost:4000/api/players"
      )
      //set the state object to contain response data
      .then((response) => {
        this.setState({ players: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //function for taking value from searchBox to use for setting state
  handleInput = (e) => {
    console.log(e.target.value);
    this.setState({ searchPlayer: e.target.value });
  };

  render() {
    //set state to contain the filtered list of players
    let filteredPlayers = this.state.players.filter((player) => {
      return player.name
        .toLowerCase()
        .includes(this.state.searchPlayer.toLowerCase());
    });

    return (
      <div>
        <SearchBox handleInput={this.handleInput} />
        <div className="grid">
          <Players
            className="box"
            filteredPlayers={filteredPlayers}
            ReloadData={this.ReloadData}
          />
        </div>
      </div>
    );
  }
}
