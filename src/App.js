
import React from "react";
import { Component } from "react";
import "./App.css";



//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar,Nav } from "react-bootstrap";

//react router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ViewPlayers } from "./components/viewPlayers";
import { AddPlayer } from "./components/addPlayer";
import { EditPlayer } from "./components/editPlayer";
import { Content} from "./components/content";



class App extends Component {
  render() {
    return (
     
      <Router>
        <div className="App">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">SquadBuildr</Navbar.Brand>
            <Nav className="mr-auto">
              <Link to="/">Home</Link>
              <Link to="/viewplayers">Players</Link>
              <Link to="/addplayer">Add Player</Link>
            </Nav>
          </Navbar>
          <br />
          <Switch>
            <Route path="/" component={Content} exact />
            <Route path="/viewplayers" component={ViewPlayers} />
            <Route path="/addplayer" component={AddPlayer} />
            <Route path="/editplayer/:id" component={EditPlayer} />
            
          </Switch>
          {/* <Players></Players>
          <Content></Content>
          <Footer></Footer> */}
        </div>
        
      </Router>
      
    );
  } //end render
} //end app
export default App;
