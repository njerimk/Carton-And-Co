import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const ComicContext = createContext();

export const useComic = () => {
  return useContext(ComicContext);
};

export const ComicProvider = ({ children }) => {
  const [comics, setComics] = useState([]);
  const [selectedComic, setSelectedComic] = useState(null);

  useEffect(() => {
    getComics();
  }, []);

  const getComics = () => {
    axios.get('http://localhost:3000/comics')
      .then(res => {
        const comicsData = res.data; // Assuming res.data is an array of comics
        setComics(comicsData);
        if (comicsData.length > 0) {
          setSelectedComic(comicsData[0]); // Set the first comic as the default
        }
      })
      .catch(error => {
        console.log('Error fetching comics', error);
      });
  };

  return (
    <ComicContext.Provider value={{ comics }}>
      {children}
    </ComicContext.Provider>
  );
};
