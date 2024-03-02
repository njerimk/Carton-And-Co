import React from "react"


export default function ComicProfileTop(props) {
    return (
        <div className="comic-profile-top">
            <div className="cover-photo"style={{backgroundImage: `url(${props.comic.bg_image_url})`}}>
               </div>
            <div className="body">
                <div className="left-col user-info">
                    <div className="profile-avatar">
                        <div className="inner" style={{backgroundImage: `url(${props.comic.image_url})`}}>

                        </div>
                    </div>
                    <div>
                        <h1>{props.comic.title}</h1>
                        <h2>Enthusiast</h2>
                    </div>
                    <div className="meta">
                        <p className="fa fa-fw fa-map-marker"> {props.comic.comic_desc}</p>
                        <p className="fa fa-fw fa-link"> paledivision.com</p>
                        <p className="fa fa-fw fa-clock-o"> Created Dec 26, 2020</p>
                    </div>
                </div>
            </div>
        </div>

        )
    }

