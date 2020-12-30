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
        <Card style={{ width: '18rem' }} className="box">
          <Card.Header as="h4">
            {this.props.player.name}
          </Card.Header>
          
          <Card.Body>
            <ListGroup.Item>{this.props.player.dateOfBirth}</ListGroup.Item>
            <ListGroup.Item>{this.props.player.nationality}</ListGroup.Item>
            <ListGroup.Item>{this.props.player.position}</ListGroup.Item>
            <ListGroup.Item>{this.props.player.squadNumber}</ListGroup.Item>
            <ListGroup.Item>{this.props.player.goals}</ListGroup.Item>
            <ListGroup.Item>{this.props.player.assists}</ListGroup.Item>

            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
          <Link to={"/editplayer/"+this.props.player._id} className="btn btn-primary">Edit</Link>
          <Button variant="danger" onClick={this.DeletePlayer}>Delete</Button>
        </Card>
      </div>
    );
  }
}
