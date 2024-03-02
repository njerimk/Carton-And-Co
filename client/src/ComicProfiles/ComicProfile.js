import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'

import ComicEpisodes from './ComicEpisodes'
import Detail from './Detail'
import ComicProfileTop from './ComicProfileTop'
// import ComicProfileEdit from './Comic_Profile_Edit'

export function ComicProfile({ match }) {
    
    useEffect(() => {
        fetchComic();
        // fetchComment();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [comic, setComic] = useState({})
    // const [comment, setComment] = useState({})

    const fetchComic = async () => {
    
    const fetchComic = await fetch(
        `http://localhost:3000/comics/${
            match.params.id
        }`
    );
        const comic = await fetchComic.json();
        setComic(comic);
        console.log(comic);
        
        // const comment = await fetchComic.json();
        // setComment(comic);


        };
    
  

  

    return (
        <div>
            <ComicProfileTop comic={comic}  />
            <div className="panel"style={{zIndex:"4", position:"absolute", marginLeft: "20%", marginTop: "10%", width: "35%"}}>

            <form  >
              <textarea placeholder="Whats in your mind today?" rows="2" className="form-control input-lg p-text-area"></textarea>
            </form>
          <footer className="panel-footer">
            <Detail comic={comic}/>
            <ComicEpisodes comic={comic}   />
          </footer>  
          </div>
        </div>
        )
    
}

export default ComicProfile