import React from 'react'
import { Link } from "react-router-dom";
import { Typography, List, Divider} from '@mui/material';
import Episode from './Episode'
export default function EpisodeList({comic}) {
    console.log(comic)

    return (
        <div style={{marginLeft:"31%", width:"207%", display:"absolute"}}>
 
        <div style={{backgroundColor: "#F5F5F5",width:"100%",margin:"5% 0% -3% 10%", padding:"2%"}}>
        {/* <div> */}
            <Typography variant="h6" style={{backgroundColor: "#F5F5F5", width:"80%"}}>
                {(comic.comic_pages.length > 1) || (comic.comic_pages.length === 0) ? `${comic.comic_pages.length} Episodes` : `${comic.comic_pages.length} Episode`}
            </Typography>
        </div>
        <div style={{margin:"2% 10% 2% 10%"}}>
        
        
        
        {comic.comic_pages.map((episode, index) => (
        <List style={{height:"100px"}}>
            <Link to={`/comics/${comic.id}/episodes/${episode.id}`} style={{ textDecoration: 'none' }}>
           <Episode episode={episode} key={index} index={index} />
           </Link>
           <Divider variant="fullWidth" component="li" style={{width:"125%"}} />
     
        </List> ))}
       
      </div>
      </div>

    )
}
    