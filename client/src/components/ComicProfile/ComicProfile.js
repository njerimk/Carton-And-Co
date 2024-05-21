import React, { useState, useEffect } from 'react';
import { useParams,Routes, Route } from 'react-router-dom';
import Detail from './Detail';
import ComicProfileHeader from './ComicProfileHeader';
import EpisodeList from './EpisodeList';
import AuthorDetail from './AuthorDetail'
import { Box } from '@mui/material';


export default function ComicProfile({comics}) {
  const { id } = useParams(); // Get the comic ID from the URL
  const [comic, setComic] = useState(null);
  console.log(comic)
  useEffect(() => {
    if (comics && comics.length > 0) {
      const foundComic = comics.find(comic => comic.id === parseInt(id));
      setComic(foundComic);
    }
  }, [id, comics]);

  if (!comic) {
    return <div>Loading...</div>;
  }

  console.log("Comic Data in ComicProfile:", comic); // Debugging


  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", padding: "20px" }}>
      <Box sx={{ width: "70%", marginBottom: "20px" }}>
        <ComicProfileHeader comic={comic} />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginLeft:"20%",marginTop:"5%", width: "98%", marginBottom: "20px" }}>
        <Box sx={{ flex: "2"}}>
          <EpisodeList comic={comic} />
        </Box>
        <Box sx={{flex:"2"}}>
            <AuthorDetail comic={comic} />
        </Box>
        <Box sx={{ flex: "2", marginRight:"37%"}}>
          <Detail comic={comic} />
        </Box>
      </Box>
    
    </Box>
  );
}