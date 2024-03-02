import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import AddCommentIcon from '@mui/icons-material/AddComment';
import {
  List,
  Divider,
  ListItemAvatar,
  Avatar,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { styled } from '@mui/system';

const useStyles = styled(theme => ({
  // Your styles here
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  fonts: {
    fontWeight: "bold"
  },
  inline: {
    display: "inline"
  },
  margin: {
    width: "100%",
    margin: "20px"
  },
  button: {
    marginLeft: "150px"
  },
  div: {
    margin: "10px",
    width: "130%"
  }
}));

const ProfileComment = (props, { match }) => {
  const classes = useStyles();
  const [fetchComicPage, setComicPage] = useState();
  const [comment, setComment] = useState("");
  const { handleSubmit, control } = useForm();

  function inputChangeHandler(e) {
    setComment(e);
    console.log(`state in handler: ${e}`);
  }

  const submitHandler = (e) => {
    console.log(e);
    fetch(
      `http://localhost:3000/comments/${match.params.id}`
    );
    const comicPage = fetchComicPage.json();
    setComicPage(comicPage);
    const newComments = comicPage.comments;

    setComment(newComments);
    console.log(newComments);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className={classes.margin}>
          Comment <AddCommentIcon />
          <Divider variant="inset" component="div" className={classes.div} />
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
            </Grid>
            <Grid item>
              <Controller
                as={<TextField />}
                id="outlined-multiline-static"
                label="Your Comment"
                control={control}
                multiline
                rows={2}
                variant="outlined"
                value={comment}
                name="comment"
                onChange={(e) => inputChangeHandler(e.target.value)}
              />
            </Grid>
          </Grid>
        </div>
        <List className={classes.root}>
          <Button variant="contained" size="small" color="primary" className={classes.button} onClick={handleSubmit(submitHandler)}>
            Comment
          </Button>
        </List>
      </form>
    </div>
  );
}

export default ProfileComment;
