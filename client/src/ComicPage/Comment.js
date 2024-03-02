  import React from "react";
  import { styled } from '@mui/system';
  import {
    List,
    ListItem,
    Divider,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Typography
  } from "@mui/material";
  
  const useStyles = styled(theme => ({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper
    },
    fonts: {
      fontWeight: "bold"
    },
    inline: {
      display: "inline"
    }
  }));
  
  const Comment = (props) => {
    const classes = useStyles();
    console.log(props.comment)
    
    // console.log(comment.user_id)


    return (

      <List className={classes.root}>
        {/* > {
          // console.log("Comment", comments); */}
             <React.Fragment key={props.comment.id}>
            <ListItem key="hi" alignItems="flex-start">
            
                <ListItemAvatar>
                <Avatar alt="avatar" src={props.comment.id} />
                  </ListItemAvatar>
              <ListItemText
                
                  primary={
                    <Typography className={classes.fonts}>
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >   
                        {props.comment.content}
                      </Typography>
                      
                    </>
                  }
                />
              </ListItem>
              <Divider />
            </React.Fragment>
          
        
      </List>)
    }
  
  
  

export default Comment
