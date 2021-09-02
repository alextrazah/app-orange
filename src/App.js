import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter , NavLink, Switch, Route } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Login from "./components/login";
import SignUp from "./components/signup";
import Pannel from "./components/Pannel";
import logo from "./logo2.svg"
import { question } from './components/question';



function App() {
  return (
  
  <BrowserRouter>
    <div className="App">

    <Navbar  className="navbarcolor" variant="dark">
    <div>
      <Navbar.Brand href="#home">
        <div  style = {{ marginLeft: '14.9rem' }}  className="row">
        <img
          alt=""
          src={logo}
          width="40"
          height="60"
          className="d-inline-block align-top"
        />{' '}
        <div style={{ marginLeft: '1rem'  , fontFamily:'HelveticaNeue-Bold' ,fontSize:'16 px', textAlign:'left'}} >
        
     Orange Digital Center
          <br></br>Virtual Tour </div>
          </div>
         
      </Navbar.Brand>
      
    </div>
    <div  style={{marginRight: '20rem'}} className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto" id="iconi">
            {/* <a style={{color:"white"}} href="/Pannel">
     
            <h6>Fr &ensp; En &ensp;<i style={{color:"white"}} class="fa fa-fw fa-user"></i></h6></a> */}

              
            </ul>

      <li className="nav-item">
                            <NavLink className="nav-link" style={{color:"white"}} activeStyle={{ color: 'orange' }} to="/"><h6>EN</h6></NavLink>
                        </li>

          </div>
  </Navbar>
 

  <Switch>
            
            <Route path="/Pannel" component={Pannel} />
            <Route path="/sign-up" component={SignUp} />
          
            <Route path="/test" component={question} />
        <Route exact path='/' component={Login} />
        <Route path="/sign-in" component={Login} />
       
      </Switch>
    </div> </BrowserRouter>
  );
}

export default App;

