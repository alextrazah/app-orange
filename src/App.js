import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter , NavLink, Switch, Route } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Login from "./components/login";
import SignUp from "./components/signup";
import Pannel from "./components/Pannel";
import Mytable from "./components/mytable";
import logo from "./logo2.svg"
import { question } from './components/question';



function App() {
  const [clr, setclr] = useState("#FF7900");
  const [clr1, setclr1] = useState("white");


  return (
  
  <BrowserRouter>
    <div className="App">

    <Navbar style={{width: '1520px',height: '90px'}}   className="navbarcolor" variant="dark">
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
     
            <a style={{color:clr, cursor : 'pointer', fontFamily:'HelveticaNeue-Bold' ,fontSize:'16 px' ,marginTop:"35px"
}} onMouseEnter={() => {
       setclr("#FF7900");
    }}  onMouseLeave={() => {
      setclr("#FF7900");
    }}  >Setup </a>






      <a style={{color:clr, cursor : 'pointer', fontFamily:'HelveticaNeue-Bold' ,fontSize:'16 px' ,marginTop:"35px"
}} onMouseEnter={() => {
       setclr("#FF7900");
    }}  onMouseLeave={() => {
      setclr("#FF7900");
    }}  >Fr </a>
    &ensp; &ensp;


    <a href="#"  onClick={() => {
       console.log("fr");
    }} style={{color:clr1, cursor : 'pointer', fontFamily:'HelveticaNeue-Bold' ,fontSize:'16 px' ,marginTop:"35px"
}} onMouseEnter={() => {
       setclr1("#FF7900");
    }}  onMouseLeave={() => {
      setclr1("white");
    }}  >En </a>      
     &ensp;  &ensp;


          <i style={{color:"white",marginTop:"35px"}} class="fa fa-fw fa-user"></i>

          <hr style={{border:"2px solid #FF7900" ,width:"10px",marginLeft:"-72px",marginTop:"60px"}}></hr>

          <hr style={{border:"2px solid #FF7900" ,width:"60px",marginLeft:"-980px",marginTop:"60px"}}></hr>

              



              
            </ul>

      <li className="nav-item">
                            {/* <NavLink className="nav-link" style={{color:"white"}} activeStyle={{ color: 'orange' }} to="/"><h6>EN</h6></NavLink> */}
                        </li>

          </div>
  </Navbar>
 

  <Switch>
            
            <Route path="/Pannel" component={Pannel} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/index" component={Mytable} />

            <Route path="/test" component={question} />
        <Route exact path='/' component={Login} />
        <Route path="/sign-in" component={Login} />
       
      </Switch>
    </div> </BrowserRouter>
  );
}

export default App;

