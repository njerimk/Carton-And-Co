import React from 'react'
import { Link } from "react-router-dom";



function ComicCard(props){      
      
    return (
        <div className="col-md-4">
        <div className="card mb-4 box-shadow" >              
        <Link to={`/comics/${props.comic.id}`} >

            <img src={props.comic.image_url} alt={props.comic.title} style={{width:"100%", height:"100%"}}/>
          </Link >
          <div className="card-body">
            
              <p className="card-text"></p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                {/* <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button> */}
              </div>
              <Link to={`/comics/${props.comic.id}`} >{props.comic.title}</Link >
            </div>
          </div>
        </div>

      
    )

    
  }


export default ComicCard
