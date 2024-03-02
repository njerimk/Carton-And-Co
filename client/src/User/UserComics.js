import React from 'react'
import { Link } from "react-router-dom";

import { styled } from '@mui/system';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import Button from '@material-ui/core/Button';



const useStyles = styled({
    root: {
      width: "75%",
      height: "45%"
    }
  });

function UserComics(props) {

            const classes = useStyles();    
        


            return ( 
                <Card className={classes.root} >
                    <Link to={`/comics/${props.user.comics?.map(
                    comic => comic.id
                )}`} >
                    <CardActionArea >
                    {props.user.comics?.map(
                    comic => <CardMedia
                        component="img"
                        alt="Comic Image"
                        height="120"
                        image={comic.image_url}
                        key={comic.id}
                     /> )}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">      
                            {props.user.comics?.map(
                            comic => comic.title)}
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                        
                    </Link>
                </Card>    
                )}
    




export default UserComics

