import React from 'react'
import defaultImg from "./profile_img_default.jpg"
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const useStyles = styled((theme) => ({

    root: {
      flexGrow: 1,
    }

  }));

export default function UserProfileTop(props) {
    const classes = useStyles();

    return( 
    <div className={classes.root}>
            <Grid item container="row">  
                        <div className="profile-avatar">
                            <div className="inner" style={{backgroundImage: `url(${props.user?.image_url})`? `url(${props.user?.image_url})` : `url(${defaultImg})`, backgroundSize:"cover", margin: "-25"}}>
                        
                        </div>
                </div>
            </Grid>
            <Grid item container="row">  
                <h2>{props.user?.user_name}</h2>
            </Grid>
            <Grid item container="row" spacing={14} sm={1}>  
               <div className="meta">
                  <p className="fa fa-fw fa-map-marker"> {props.user?.user_description}</p>
                  <p className="fa fa-fw fa-clock-o"> {props.user?.created_at}</p>
                </div>   
            </Grid>

            
        </div>
  
    )
}
