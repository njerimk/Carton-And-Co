import React from "react";
// import ComicUpload from './ComicProfiles/ComicUpload'
import ComicPageUpload from './ComicPage/ComicPageUpload'



function Publish() {
  return (
    
    <div className="Publish" style={{marginLeft: "35%"}}>
      <br/>
      <br/>
          {/* <ComicUpload /> */}
      <br />
      <br/>
      <h1>Upload New Comic Page</h1>
        <ComicPageUpload />
     
    
        <br />
        
        <br />
        <br />
        
    </div>
  );
}

export default Publish
