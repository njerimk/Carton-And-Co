import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import ComicProfilePic from './ComicProfilePic';
import { Link } from 'react-router-dom';

export function ComicProfileHeader({ comic }) {
  // Ensure comic and comic_pages are defined and not empty
  const hasEpisodes = comic && comic.comic_pages && comic.comic_pages.length > 0;

  return (
    <Card sx={{ maxWidth: '100%', margin: "0% 30% 0% 10%" }}>
      <CardMedia
        component="img"
        height="200"
        image={comic.bg_image_url || 'https://e963yme7wqk.exactdn.com/wp-content/plugins/elementor/assets/images/placeholder.png?fit=755,503'}
        alt={comic.title}
      />

      <div style={{ position: "absolute", top: "30%" }}>
        <ComicProfilePic comic={comic} />
      </div>
      <CardContent style={{ position: "relative", left: "30%" }}>
        <h2>{comic.title}</h2>
        {hasEpisodes && (
          <Button
            variant="contained"
            component={Link}
            to={`episodes/${comic.comic_pages[0].id}`}
            style={{
              backgroundColor: "black",
              height: "40px",
              width: "23%",
              marginRight: "10px",
              textDecoration: "none"
            }}
          >
            Read Episode 1
          </Button>
        )}
        <Button
          variant="outlined"
          style={{
            backgroundColor: "white",
            borderColor: "black",
            borderWidth: "2px",
            height: "40px",
            width: "20%",
            textDecoration: "none"
          }}
        >
          Subscribe
        </Button>
      </CardContent>
    </Card>
  );
};

export default ComicProfileHeader;

