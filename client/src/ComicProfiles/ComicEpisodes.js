import React from 'react'
import ComicEpisodeCard from '../ComicProfiles/ComicEpisodeCard'



function ComicEpisodes(props) {
         
return(
      
      
      <div>
          <div className="episode-container"> 
          <h3 style={{textAlign:"left"}}>Episodes </h3>
          </div>
                  {props.comic.comic_pages?.map(
                        comic_page => <ComicEpisodeCard comic_page={comic_page} key={comic_page.id} />
          

        

          )}  
           
    </div>
    )}
          

    


export default ComicEpisodes
