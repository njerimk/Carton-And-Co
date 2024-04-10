import React, {useState, useEffect} from 'react';
import Slider from 'react-slick';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import '../style/_slick.css';
import '../style/_slickTheme.css';
import styles from '../style/ComicCarousel.scss'
// import comic1 from "../../images/cartonco_sample.png";
// import comic2 from "../../images/cartonco_sample2.jpeg";
// import comic3 from "../../images/EqQTbQ7XIAEAH1P.png";
import axios from 'axios';

export default function ComicCarousel() {
  const [centerIndex, setCenterIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState(false);
  const [comics, setComics] =useState([])

  const getComics = () => {
    axios.get("http://www.localhost:3000/comics")
      .then(response => {
        setComics(response.data);
        console.log(comics);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    getComics();
    console.log(comics);
  }, []); // Empty dependency array me


  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
        <Slider {...settings}>
          {comics.map((comic, index) => (
            <div key={comic.title} className={styles.carouselItem}>
                <Card sx={{ maxWidth: 480, marginRight:"20px" }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(-1)}
                      style={{ filter: hoveredIndex === index ? 'brightness(1.0)' : 'brightness(0.7)' }} 
                >
                    <CardMedia
                      sx={{ height: 380 }}
                      image={comic.image_url}
                      title={comic.title}
                      alt={`Slide ${index + 1}`}
                    />  
                 </Card>
            </div>
          ))}
        </Slider>
  );
}
