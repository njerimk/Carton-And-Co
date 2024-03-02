import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import UserComics from './UserComics'
import ProfileCommentList from './ProfileCommentList'
import UserProfileTop from './UserProfileTop'
import ProfileComment from '../ComicPage/ProfileComment'

const useStyles = styled((theme) => ({
    root: {
      padding: 100,
    },
  }));
  
export function UserProfile({ match }) {
    
    const classes = useStyles();

    useEffect(() => {
        fetchUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [user, setUser] = useState({})

    const fetchUser = async () => {
    
    const fetchUser = await fetch(
        `http://localhost:3000/users/${
            match.params.id}`
    );
        const user= await fetchUser.json();
        setUser(user);
        };
    
  

  

     return (
        <div className={classes.root}>
         <Grid container>
            <Grid container justify="center" >
                <Grid item xs={4} container="column" >
                    <UserProfileTop user={user}/>
                </Grid>
                 <Grid item xs={4} container="column" >
                    <ProfileComment user={user}/>
                    <ProfileCommentList user={user}/>
                </Grid>
               
                <Grid item xs={4} container="column" >
                    <h5 style={{marginLeft: "80px"}}>{user.user_name}'s  comics </h5>
                <UserComics user={user}/>
                </Grid>
               
            </Grid>
        </Grid>
    </div>       
        )
    
}

export default UserProfile
