import React from 'react'
// import Comment from './Comment'
function ComicPageProfile(props) {
    
        return (
            <div>
             
              <h1 style={{textAlign: "center"}}>{props.comicPage.page_name}</h1>
                <img src={props.comicPage.image_url} alt={props.comicPage.page_name} style={{marginRight: "35%", marginLeft:"35%"}}/>
            </div>
        )
    }


export default ComicPageProfile
