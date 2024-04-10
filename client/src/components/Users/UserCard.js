import React,{useEffect} from 'react'
import {Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';


const useStyles = styled({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 400,
    width: 100
  },
});


function UserCard({user}) {
  const classes = useStyles();
  const defaultImg = "https://cannamazoo.com/assets/defaults/img/avatar/avatar-1.png"
    //add links to:
    //1. Click a card and view a ComicProfile (which contains, other children)

    useEffect(() => {
    }, [user]);

    if (!user) {
        return <p>Loading...</p>;
    }
    return (
      
      <Card className={classes.root}>      
      
        <Link to={`/users/${user.id}`}>
            <CardMedia
            sx={{ height: 210  }}
            image={user.image_url? user.image_url : defaultImg}
            title={user.user_name}  />
     
          
          <CardContent>
          
            <Typography gutterBottom variant="h6" component="h2" style={{textAlign: "center"}}>
                 <Link to={`/users/${user.id}`}> {user.user_name}</Link>
            </Typography> 
                
        </CardContent>
        </Link>

      

   </Card> 
    )
}

export default UserCard
