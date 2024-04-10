import {useState, useEffect} from 'react'
import UserCard from './UserCard'
import Grid from '@mui/material/Grid';


function UserIndex({users}) {
    useEffect(() => {
    }, [users]);

    if (!users) {
        return <p>Loading...</p>;
    }

    return(
      <Grid container style={{margin: "5% 10% 5% 10%"}}>
        <Grid container justify="center" spacing={8}>

            {users.map(
              user =>        
              <Grid item xs={2} spacing={3}>

              <UserCard user={user} key ={user.id} />
            </Grid>
            )}
            
        </Grid>
   </Grid>
      
    )
}

 

export default UserIndex