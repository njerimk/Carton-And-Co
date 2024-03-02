import React from 'react'
import { Link } from "react-router-dom";
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
    height: 200,
    width: 200
  },
});


function UserCard(props) {
  const classes = useStyles();
  const defaultImg = "https://www.uoh.cl/assets/img/no_img.jpg"
    //add links to:
    //1. Click a card and view a ComicProfile (which contains, other children)
    return (
      
      <Card className={classes.root}>      
      <Link to={`/users/${props.user.id}`}>
          <CardMedia
          className={classes.media}
          image={props.user.image_url ? props.user.image_url :  defaultImg}
          title={props.user.user_name}  />
          <CardContent>
          
            <Typography gutterBottom variant="h6" component="h2" style={{textAlign: "center"}}>
                 <Link to={`/users/${props.user.id}`}> {props.user.user_name}</Link>
            </Typography> 
                
        </CardContent>
        </Link>

      

   </Card> 
    )
}

export default UserCard
