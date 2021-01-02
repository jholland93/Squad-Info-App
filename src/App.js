
import React from "react";
import { Component } from "react";
import "./App.css";



//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//react router
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { ViewPlayers } from "./components/viewPlayers";
import { AddPlayer } from "./components/addPlayer";
import { EditPlayer } from "./components/editPlayer";
import { WelcomePage} from "./components/welcomePage";
import { Footer } from "./components/footer";



class App extends Component {
  render() {
    return (
     
      <Router>
        <div className="App">
    
          <br />
          <Switch>
            <Route path="/" component={WelcomePage} exact />
            <Route path="/viewplayers" component={ViewPlayers} />
            <Route path="/addplayer" component={AddPlayer} />
            <Route path="/editplayer/:id" component={EditPlayer} />
          </Switch>
        </div>
        <Footer/>
      </Router>
      
    );
  } //end render
} //end app
export default App;
