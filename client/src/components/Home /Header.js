import React from 'react'

export default function Header(props) {
    

    return (
        <>
           <div className="main position-relative pb-2.5rem" >
            <div className="jumbotron" style={{backgroundImage: `url(https://images.squarespace-cdn.com/content/v1/54c4dd2ce4b0b23209609dcd/1467813955283-DTBC8MY95QR8M23GTEWM/ke17ZwdGBToddI8pDm48kCjLvB3TqMhgkkGOn_3ElYVZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVEL0bFEhmb07prgLIh8uFuRFoZXU9hsAZQbmwRVrGGElt1lH3P2bFZvTItROhWrBJ0/image-asset.png)`, backgroundSize: "cover" }}>
                <div className="container" >
                    <h1 className="display-3">
                        Carton & Co.
                    </h1>
                    <p className="main-text">
                    Create comics and find your community. 
                    </p>
                    {/* <p className="more-button">
                        <a className="btn btn-primary btn-lg" href="." role="button">
                            Learn more »
                        </a>

                    </p> */}
                </div>
            </div>
        </div>
              
        </>
    )
}
