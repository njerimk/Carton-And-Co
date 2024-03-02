import {Component} from 'react'
import Main from './Main'
import ComicCarousel from './ComicCarousel'
// import SignUp from '../components/auth/SignUp'
// import LogIn from '../components/auth/LogIn'
import axios from 'axios'
export default class Home extends Component{


    
    handleLogoutClick(){
        axios.delete("http://localhost:3000/logout", { withCredentials: true})
        .then(response =>{
            this.props.handleLogout();


        }).catch(error => {
            console.log("logout error", error)
        })

    }

    render(){
    return (
        <div className="home">
        {/* <SignUp handleSuccessfulAuth={this.handleSuccessfulAuth}/> */}
        {/* <LogIn handleSuccessfulAuth={this.handleSuccessfulAuth}/> */}
        <h3 style={{textAlign: "center", color: "pink"}}>
        Status: {this.props.loggedInStatus}</h3>
        <Main />
            <ComicCarousel />

        </div>
    )
}
}

