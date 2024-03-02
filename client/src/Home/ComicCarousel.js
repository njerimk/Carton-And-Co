import React from 'react'
// import React, { Link } from  'react-router-dom'
import { styled } from '@mui/system';
import Slide from '@mui/material/Slide';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const useStyles = styled({
  root: {
    maxWidth: 800,
  },
});


export default function ComicCarousel() {

  const classes = useStyles();

//   useEffect(() => {
//     fetchComicImage();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
// }, []);

// const [comicImage, setComicImage,] = useState({})

// const fetchComicImage = async () => {

// const fetchComicImage = await fetch(
//     'http://localhost:3000/comics'
      

// )  
// ;
//     const comicImage = await fetchComicImage.json();
//     // setComicImage(comicImage);

//     };

    
  
     
      return (
        <div>
          <Typography gutterBottom variant="h6" component="h2" style={{textAlign: "center"}}>
               Check Out Some of Our Creators' Comics!
            </Typography>
        <Slide
          arrows
        >

          
          <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
            component="img"
            alt="comicArt"
            height="250"
            image="https://cdn.vox-cdn.com/thumbor/4vfLd3loqFLcNJy5tk9e005Iysk=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9913773/DPlwnI2VwAAw_mF.jpg"
            title="Contemplative Reptile"
          />
            <CardContent>
             <Typography gutterBottom variant="h5" component="h2" style={{textAlign: "center"}} >
               Lovingly Plain
            </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
    <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
            component="img"
            alt="comicArt"
            height="250"
            image="https://sequentialstate.com/wp-content/uploads/2017/12/What-is-Left-cover-458x445.png"
            title="Contemplative Reptile"
          />
            <CardContent>
             <Typography gutterBottom variant="h5" component="h2" style={{textAlign: "center"}}>
            Lovingly Plain
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>

    <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
            component="img"
            alt="comicArt"
            height="250"
            image="https://cdn.shopify.com/s/files/1/0558/2081/files/OConnell_SpiderGwen_REGULAR_FINAL_SM_1024x1024.jpg?v=1497905479"
            title="Contemplative Reptile"
          />
            <CardContent>
             <Typography gutterBottom variant="h5" component="h2" style={{textAlign: "center"}}>
            Loveless
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>

         
        </Slide>
      </div>
      );
    }
    

