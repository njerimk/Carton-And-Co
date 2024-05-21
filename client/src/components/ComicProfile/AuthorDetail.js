import React from 'react'
import {Link} from 'react-router-dom'
import {Card, Divider,CardMedia, CardContent,Typography, Box, List, ListItemAvatar, Avatar, ListItemText} from '@mui/material'

export default function AuthorDetail({comic}) {
    console.log(comic)

    return (
        <Card 
            // sx={{mx:"36%", marginBottom:"37%",marginTop:"-74%", maxWidth: '100%', minHeight:"180px"}}
            style={{margin:"auto", bottom:"63%",maxWidth:"auto", height:"10%",width:"90%",position:"relative",left:"165%", zIndex:"2", border:"solid", borderColor:"#ECECEC", borderWidth:"0.5px", borderRadius:"5px"}}
        >
        {/* <Typography variant="h6" gutterBottom >{comic.users.length > 1 ? `${comic.users.length} Creators` : `${comic.users.length} Creator`} </Typography>  */}

        <Typography variant="h6" gutterBottom  style={{backgroundColor: "#F5F5F5", width:"100%",padding:"5%"}}>{comic.users.length > 1 ? `${comic.users.length} Creators` ? comic.users.length === 1 :`${comic.users.length} Creator`: "No Creator"} </Typography>
        <div style={{margin:"2px"}}>
        
        <Typography variant="h7" paragraph style={{ margin: "5px" }}>
            {comic.users.map((user, index) => (
                <div key={user.id} style={{ marginBottom: '5px' }}>
                    <List>
                        <div style={{ display: 'flex', alignItems: 'center', height:"600px"}}>

                            <Avatar
                                    variant="circle"
                                    src={user.image_url} 
                                    style={{ height: "50px", width: "50px", display:"inlineblock", margin:"5px" }}
                            />
                            <Link to={`/users/${user.id}`} style={{ display: 'inlineblock'}}>
                            {user.user_name.toUpperCase()}
                            </Link>
                            </div>

                        <Divider component="li" variant="fullWidth" style={{color:"#ECECEC"}}/>
                    </List>
                </div>
            ))}
  </Typography>

            {/* <Typography paragraph><strong>Genres:</strong> Fantasy, Romance</Typography>
            <Typography paragraph><strong>Release Schedule:</strong> Weekly</Typography>
            <Typography paragraph><strong>Status:</strong> Ongoing</Typography> */}
          
        </div>
        
      </Card>
         

        )
    }
