import React from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import axios from 'axios';
import {Link} from 'react-router-dom';

export class PlayerItem extends React.Component {
  constructor(){
    super();
      this.DeletePlayer = this.DeletePlayer.bind(this);
  }

  //delete player method
  DeletePlayer(e){
    //prevent multiple calls
    e.preventDefault(e);
    console.log("Delete: "+ this.props.player._id);

    //delete movie using axios
    axios.delete("http://localhost:4000/api/players/"+this.props.player._id)
    .then(()=>{
      //invoke reloaddata function to call reloadData on players.js
      this.props.ReloadData();
    })
    .catch(
 
    );
  }

  render() {
    return (
      <div className="grid">
        <Card style={{ width: '18rem'}} className="box">
          <Card.Header id="name-container">
            <div id="name">{this.props.player.name}</div>
            <div id="position">{this.props.player.position}</div>
            <div id="number">{this.props.player.squadNumber}</div>
          </Card.Header>
          
          <Card.Body>
            <ListGroup.Item style={{ margin: '0 0 5px 0', border:'none' }}><div class="category">DOB<span>{this.props.player.dateOfBirth}</span></div></ListGroup.Item>
            <ListGroup.Item style={{ margin: '0 0 5px 0' , border:'none'}}><div class="category">Nationality<span>{this.props.player.nationality}</span></div></ListGroup.Item>
            <ListGroup.Item style={{ margin: '0 0 5px 0', border:'none' }}><div class="category">Goals<span>{this.props.player.goals}</span></div></ListGroup.Item>
            <ListGroup.Item style={{ margin: '0 0 5px 0' , border:'none'}}><div class="category">Assists<span>{this.props.player.assists}</span></div></ListGroup.Item>

            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
          <Link to={"/editplayer/"+this.props.player._id} id="edit-button"><i class="fa fa-pen" /></Link>
          <Button id="delete-button" onClick={this.DeletePlayer}><i class="fa fa-trash-alt" /></Button>
        </Card>
      </div>
    );
  }
}
