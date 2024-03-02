import React from 'react'
import { Link } from "react-router-dom";

import { styled } from '@mui/system';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import Button from '@material-ui/core/Button';



const useStyles = styled({
    root: {
      maxWidth: 345,
    },
  });

function ComicEpisodeCard(props) {
   
            const classes = useStyles();    

            return (                        
            
            <Link to={`/comic_pages/${props.comic_page.id}`} >

                <Card className={classes.root} >
                    <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="120"
                        image={props.comic_page.image_url}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            
            

                        {props.comic_page.page_name}
                        </Typography>
                        {/* <Typography variant="body2" color="textSecondary" component="p">
                        {props.comic_page.created_at}

                       
                        </Typography> */}
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                    {/* <Button size="small" color="primary">
                        Share
                    </Button> */}
                    {/* <Button size="small" color="primary">
                        
                    </Button> */}
                    </CardActions>
                </Card>    
                </Link >
                )}
    




export default ComicEpisodeCard

