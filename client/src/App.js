import './App.css'
import axios from 'axios'
import React, {Component} from 'react'
// import {useState} from "react"
import Home from './Home/Home.js'
import ComicIndex from './ComicIndex.js'
import ComicProfile from './ComicProfiles/ComicProfile'
import UserIndex from './UserIndex'
import UserProfile from './User/UserProfile'
import ComicPage from './ComicProfiles/ComicPage'
import LogIn from './components/auth/LogIn'
import SignUp from './components/auth/SignUp'
import Publish from './Publish'
import DashBoard from './Dashboard'

import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";



export default class App extends Component {
constructor(){
  super();

  this.state = {
    loggedInStatus: "NOT_LOGGED_IN",
    user: {}
  }
}

checkLoginStatus=()=>{
  axios.get("http://localhost:3000/logged_in", {withCredentials: true})
  .then(response => {
    if (response.data.logged_in && this.state.loggedInStatus ==="NOT_LOGGED_IN")
    {this.setState({
      loggedInStatus: "LOGGED IN",
      user: response.data.user
    })
  }else if (!response.data.logged_in & this.state.loggedInStatus === "LOGGED_IN")
  {this.setState({
    loggedInStatus: "NOT LOGGED IN",
    user: {}
  })
 
    }
})
.catch(error => {
  console.log("check login error", error);
});
}

componentDidMount(){
  this.checkLoginStatus();
}

handleLogin=(data)=>{
  this.setState({
    loggedInStatus: 'LOGGED_IN',
    user: data.user
  })
}

handleSuccessfulAuth=(data)=>{

  sessionStorage.setItem("user_id", data.user.id)
  this.handleLogin(data);
  
}

handleLogout=()=> {
  this.setState({
    loggedInStatus: "NOT_LOGGED_IN",
    user: {}
  })
}







  render(){
  return (
    <Router>
      <div>
        <nav>
          <ul className="topnav">
            <li className="active">
              <Link to="/" style={{textDecoration: "none"}}>Home </Link>
            </li>
            <li>
              <Link to="/users" style={{textDecoration: "none"}}>Users</Link>
            </li>
            <li>
              <Link to="/comics" style={{textDecoration: "none"}}>Comics</Link>
            </li>
         
            <li id="right-nav">
              {this.state.loggedInStatus === "LOGGED_IN"?
              <Link to=" " onClick={()=> this.handleLogout()}>Log Out</Link>
              : <Link to="/login" style={{textDecoration: "none"}}>Login</Link>
              }
            </li>  
            <li id="right-nav2" >
              <Link to="/signup" style={{textDecoration: "none"}}>Sign Up</Link>
            </li>

            <li id="right-nav2" >
              <Link to="/publish" style={{textDecoration: "none"}}>Publish</Link>
            </li>

  
              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
           </ul>
          </nav>
       

        <Routes>
            <Route exact path="/publish" element={<Publish/>}/>
            <Route exact path="/login" element={
                  this.state.loggedInStatus === "LOGGED_IN" ? (
                    <Navigate to="/" />
                ) :  ( <LogIn
                          loggedInStatus={this.state.loggedInStatus}
                          handleLogin={this.handleLogin}
                          handleSuccessfulAuth={this.handleSuccessfulAuth}
                          handleLogout={this.handleLogout}
              />
            )
            } />
            {/* <Route exact path="/login"
            render={props => (
              <LogIn {...props}
              loggedInStatus={this.state.loggedInStatus} 
              handleLogin={this.handleLogin}
              handleSuccessfulAuth={this.handleSuccessfulAuth}
              handleLogout={this.handleLogout}
              />
            )}
            /> */}
            <Route exact path="/signup" element={<SignUp/>} />

            <Route exact path="/comics" element={<ComicIndex/>}/>
            <Route exact path="/comics/:id" element={<ComicProfile/>}/>
            <Route exact path="/comic_pages/:id" element={<ComicPage/>}/>
            
            <Route exact path="/users" element={<UserIndex/>} />
            <Route exact path="/users/:id" element={<UserProfile/>}/>

            <Route exact path="/"
            render={props => (
              <Home {...props} 
              loggedInStatus={this.state.loggedInStatus} 
              handleLogin={this.handleLogin}
              handleLogout={this.handleLogout}
              />
            )}
            />
            <Route exact path={"/dashboard"} 
            render={props => (
              <DashBoard
               {...props} loggedInStatus={this.state.loggedInStatus}/>
            )}/>
           
          
          
          
        </Routes>
        

      </div>
    </Router>
  );

}
}
