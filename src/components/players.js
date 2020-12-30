import React from "react";
import { PlayerItem } from "./playerItem";



export class Players extends React.Component {
  
  render() {
    //map function allows acces to players object - takes array and creates new player item for each player
    return this.props.filteredPlayers.map((player, i)=> {
      return <PlayerItem player = {player} key={i} ReloadData={this.props.ReloadData} />
    })
  }
}
