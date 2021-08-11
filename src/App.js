import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Login from "./components/login";
import SignUp from "./components/signup";
import Pannel from "./components/Pannel";
import logo from "./logo2.svg"
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';

function App() {
  return (<Router>
    <div className="App">

    <Navbar  className="navbarcolor" variant="dark">
    <div>
      <Navbar.Brand href="#home">
        <div  style = {{ marginLeft: '11.9rem' }}  className="row">
        <img
          alt=""
          src={logo}
          width="60"
          height="60"
          className="d-inline-block align-top"
        />{' '}
        <div style={{ marginLeft: '1.9rem' }}> Orange Digital Center
          <br></br>
          Virtual tour</div>
          </div>
         
      </Navbar.Brand>
      
    </div>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto" id="iconi">
            <a style={{color:"white"}} href="#"><h6>Fr &ensp; En &ensp;<i style={{color:"white"}} class="fa fa-fw fa-user"></i></h6></a>

              
            </ul>
          </div>
  </Navbar>
 

  <Switch>
            
            <Route path="/Pannel" component={Pannel} />
            <Route path="/sign-up" component={SignUp} />
          
    
        <Route exact path='/' component={Login} />
        <Route path="/sign-in" component={Login} />
       
      </Switch>
    </div></Router>
  );
}

export default App;
