import React from 'react'
import { Card,CardMedia,CardContent, Typography } from '@mui/material';

export default function ComicProfilePic({comic}) {
    

    return (
        <Card style={{position:"relative",maxWidth:"100%", marginLeft: "30px", top:"50px", border:"solid white", borderWidth:"10px"}}>
        <CardMedia
          component="img"
          height="230"
          image={comic.image_url || 'https://e963yme7wqk.exactdn.com/wp-content/plugins/elementor/assets/images/placeholder.png?fit=755,503'}
          alt={comic.title}
        />
        </Card>
    )
}
