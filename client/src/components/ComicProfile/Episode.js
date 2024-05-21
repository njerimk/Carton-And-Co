import React from 'react'
import {ListItem, ListItemText, ListItemAvatar, Avatar, Divider } from '@mui/material'

export default function Episode({episode, index}) {
            {console.log(episode)}


    return (
        <ListItem key={index} style={{width:"100%", marginBottom:"-10px"}}>
        <ListItemAvatar>
          <Avatar
                variant="square"
                src={episode.image_url} 
                style={{ height: "100px", width: "100px", marginRight: "16px", padding:"10px" }}
           />
        </ListItemAvatar>
        <ListItemText primary={`Episode ${index +1}`} secondary={new Date(episode.created_at).toDateString()} />
        </ListItem>
        

    )
}
