import { useState } from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';
import comic1 from "../../images/cartonco_sample.png"
import comic2 from "../../images/cartonco_sample2.jpeg"
import comic3 from "../../images/EqQTbQ7XIAEAH1P.png"

let images =[
    {
        name: "What is Left",
        description: "A comic about finding your memories",
        src: comic1
    },
    {
        name: "Laura Dean Keeps Breaking Up With Me",
        description: "A comic about finding yourself",
        src: comic2
    },
    {
        name: "Spider Gwen",
        description: "A comic about finding your power",
        src: comic3
    }
  
  ]

export default function CarouselCard({image}) {
    const [centerIndex, setCenterIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false);
   


    return (
       
        
      
        <Card 
        sx={{ 
            maxWidth: 300, 
            display: 'inline-flex',
            marginLeft: '35%'
            }}>
          
            <CardActionArea>
            
                <CardMedia
                  sx={{ 
                    maxWidth: 300, 
                    display: 'inline-flex',
                    marginLeft: 'auto'
                    }}
                component="img"
                src={image.src}
                height="400"
                alt={`Slide ${index + 1}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ filter: isHovered ? 'brightness(1.0)' : 'brightness(0.7)' }} 
                />
                
            </CardActionArea> 
        
        </Card>

       
    )
}
