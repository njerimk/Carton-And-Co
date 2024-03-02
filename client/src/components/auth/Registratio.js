import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Registration() {

   const classes = useStyles();
   const [userName, setUserName]= useState("")
   const [password, setPassword] = useState("")
   const [passwordConfirm, setPasswordConfirm] = useState("")

  
  

 

  // const [registrationErrors, sentRegistrationErrors]= useState({})
  const handleSubmit = (e) => {
    console.log("form submitted");
    // setUserName(username)
    // setPassword(password)
    // setPasswordConfirm(passwordConfirm)
    // setRegErrors(regErrors)
    // e.preventDefault();
      

      
       

  }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="username"
                type="text"
                name="username"
                autoComplete="username"
                value={userName} 
                onChange={e => setUserName(e.target.value)}
                required

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="text"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required


              />
              </Grid>
              <Grid item xs={12}>

               <TextField
                variant="outlined"
                required
                fullWidth
                name="passwordConfirm"
                label="Password Confirmation"
                type="text"
                id="repeat-password"
                autoComplete="current-password"
                value={passwordConfirm}
                onChange={e => setPasswordConfirm(e.target.value)}
                required

              />
            </Grid>
            <Grid item xs={12}>
          
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="http://localhost:3001/login" variant="body2">
                Already have an account? Log in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
  );
}

