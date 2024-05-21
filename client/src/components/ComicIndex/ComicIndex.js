import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ComicCard from './ComicCard'

function ComicIndex({ comics }) {
    useEffect(() => {
    }, [comics]);

    if (!comics) {
        return <p>Loading...</p>;
    }

    return (
      <div className="album py-5 bg-light">
      <div className="container">
        <div className="row">
          {comics.map(
            comic =><ComicCard comic={comic} key ={comic.id} />

          )}
          
        </div>
      </div>
    </div>
  )
  }


export default ComicIndex