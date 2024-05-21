import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import Page from './Page';

export default function ComicPage({ comics }) {
  const { comicId, episodeId } = useParams();
  const [comic, setComic] = useState(null);
  const [comicPages, setComicPages] = useState([]);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  useEffect(() => {
    if (comics && comics.length > 0) {
      const foundComic = comics.find(comic => comic.id === parseInt(comicId));
      setComic(foundComic);
      if (foundComic) {
        setComicPages(foundComic.comic_pages);
        const foundEpisode = foundComic.comic_pages.find(episode => episode.id === parseInt(episodeId));
        setCurrentPageIndex(foundComic.comic_pages.indexOf(foundEpisode)); // Set the index to the selected episode
      }
    }
  }, [comicId, episodeId, comics]);

  if (!comic || comicPages.length === 0) {
    return <div>Loading...</div>;
  }

  const handleNextPage = () => {
    if (currentPageIndex < comicPages.length - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  return (
    <div>
      <Page currentPage={comicPages[currentPageIndex]} />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
        <Button 
          size="large" 
          onClick={handlePreviousPage} 
          disabled={currentPageIndex === 0}
        >
          Previous
        </Button>
        <Button 
          size="large" 
          onClick={handleNextPage} 
          disabled={currentPageIndex >= comicPages.length - 1}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
