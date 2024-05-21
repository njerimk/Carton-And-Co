import React from 'react'
import {Card, CardMedia, CardContent,Typography, Box} from '@mui/material'

export default function Detail({comic}) {
    console.log(comic)

    return (
        <Card 
        style={{margin:"auto", bottom:"45%",maxWidth:"auto", width:"90%",position:"relative",left:"65%", zIndex:"2", border:"solid", borderColor:"#ECECEC", borderWidth:"0.5px", borderRadius:"5px"}}
        >
            {/* <Typography variant="h6">Details</Typography> */}
        <Typography variant="h6" gutterBottom  style={{backgroundColor: "#F5F5F5", width:"100%",padding:"5%"}}>Details</Typography>
        <div style={{margin:"4px"}}>
        {/* <div> */}
            <Typography paragraph style={{margin:"10px"}}>
                {comic.comic_desc ? comic.comic_desc : "No Description Yet"}
            </Typography>
            {/* <Typography paragraph><strong>Genres:</strong> Fantasy, Romance</Typography>
            <Typography paragraph><strong>Release Schedule:</strong> Weekly</Typography>
            <Typography paragraph><strong>Status:</strong> Ongoing</Typography> */}
            <Typography paragraph style={{margin:"5px", color:"#cccccc"}}>{comic.title}</Typography> 
            <Typography paragraph style={{margin:"5px", color:"#cccccc" }}>Published by Carton And Co</Typography>

        </div>
        
      </Card>
         

        )
    }
