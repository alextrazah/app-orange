import React, { Component } from "react";

import '../App.css';
export default class Login extends Component {
    
    render() {
        
        return (
            <div className="auth-wrapper">
            <div className="auth-inner">
            <form>
                <h4 style={{ fontFamily:'HelveticaNeue-Bold' ,fontSize:'16 px', textAlign:'left'}} >Orange Digital<br></br> 
                    Center Virtual Tour</h4>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input  style = {{background:'#FF7900',color:"black",border:"20px"}}   type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        <p  style = {{ marginTop: '-1.9rem' }}  className="forgot-password text-right">
                            Forgot account?
                        </p>
                    </div>
                </div>

                <button type="submit"  style = {{background:'#FF7900',color:"black",border:"20px",  borderRadius: "1px"}} href="/test"  className="btn btn-primary btn-block">Login</button>
                
            </form>
            </div></div>
        );
    }
}
