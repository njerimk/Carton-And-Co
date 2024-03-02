import {Component} from 'react'
import UserCard from './UserCard'
import Grid from '@mui/material/Grid';


class UserIndex extends Component {
  
  constructor(){
    super();
    this.state = {
      users: []
    }
  }

      componentDidMount(){
        fetch("http://localhost:3000/users")
        .then(resp => resp.json())
        .then(users => this.setState({users}))

        // fetch("http://localhost:3000/users")
        // .then(resp => resp.json())
        // .then(users=> console.log(users))

        // fetch("http://localhost:3000/comic_pages")
        // .then(resp => resp.json())
        // .then(comic_pages=> console.log(comic_pages))
      }
      
    render(){
    

        return(
      <Grid container spacing={1}>
        <Grid container justify="center" spacing={7}>

            {this.state.users.map(
              user =>        
              <Grid item xs={24} spacing={10}>

              <UserCard user={user} key ={user.id} />
            </Grid>
            )}
            
        </Grid>
   </Grid>
      
    )
    }
}
 

export default UserIndex
