import React,{useEffect} from 'react'
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ComicCard({comic}){  
    useEffect(()=>{
      console.log(comic)
    }, [comic]) 
        
    return (
      <Card sx={{ maxWidth: 245, margin:"20px" }}>
        <Link to={`/comics/${comic.id}`} >
      <CardMedia
        sx={{ height: 350  }}
        image={comic.image_url}
        title="green iguana"
      />
   
      </Link >

    </Card>
   
      
    )

    
  }


export default ComicCard