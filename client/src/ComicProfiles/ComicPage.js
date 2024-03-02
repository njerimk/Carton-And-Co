import React, { useState, useEffect } from 'react'
import ComicPageProfile from '../ComicPage/ComicPageProfile'
import Comment from '../ComicPage/Comment'
import CommentForm from '../ComicPage/CommentForm'
export function ComicPage({ match }) {
    
    useEffect(() => {
        fetchComicPage();
        setComments(newComments)
 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
 

    const [comicPage, setComicPage] = useState({})
    const [newComments, setComments] = useState([])
   

    const fetchComicPage = async () => {
    
    const fetchComicPage = await fetch(
        `http://localhost:3000/comic_pages/${
            match.params.id
        }`
    );
        const comicPage = await fetchComicPage.json();
        setComicPage(comicPage);
        const newComments = comicPage.comments
        
        setComments(newComments)
        console.log(newComments);
        

        };
    const updateComments=(comment) =>{
        // const newComments = comicPage.comments

        return setComments({...comicPage.comments, comment})
    }

       
            // Typical usage (don't forget to compare props):
           
          
        return (
            
            <div>
                <ComicPageProfile comicPage={comicPage} key={comicPage.id}/>
                <div style={{ marginLeft: "30%", marginBottom: "40%"}}>
                        <h1 >Comments</h1>
                            <CommentForm comicPage={comicPage} updateComments={updateComments}/>
                            {comicPage.comments?.map(
                                comment => <Comment comment={comment} key={comment.id}  />
                             )}
                    </div>
            </div>
        )
    }

export default ComicPage