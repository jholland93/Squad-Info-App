// import logo from './logo.svg';
import React from "react";
import { Component } from "react";
import "./App.css";
import { Content } from "./components/content";
import { Footer } from "./components/footer";
import { Players } from "./components/players";

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Button, Form, FormControl, Nav } from "react-bootstrap";

//react router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/players">Players</Nav.Link>
              <Nav.Link href="/addplayer">Add</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>
          <br />
          <Switch>
            <Route path="/" component={Content} exact />
            <Route path="/players" component={Players} exact />
            <Route path="/addplayer" component={Players} exact />
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
