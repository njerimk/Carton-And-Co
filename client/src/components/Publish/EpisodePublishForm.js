import React, { useState} from "react";

export default function ComicPageUpload() {
    const [newPage, setNewPage]=useState({page_name:"",page_desc:"",comic_id:0, image_url:"", user_id:23})

    const comicPageChangeHandler = (e) => {
        setNewPage({ [e.target.name]: e.target.value });
        console.log(newPage)
      };
    
      const inputFileHandler = (e) => {
        console.log(e.target.files[0]);
        setNewPage({ image_url: e.target.files[0] });
      };

      const submitNewComicPage = (e) => {
        e.preventDefault();
        console.log(e.target);
        // const comic_page = {
        //   page_name: this.state.page_name,
        //   page_desc: this.state.page_desc,
        //   comic_id: 25,
        //   image_url: this.state.image_url,
        // };
    
        const comic_page = new FormData();
        comic_page.append("page_name", newPage.page_name);
        comic_page.append("page_desc", newPage.page_desc);
        comic_page.append("comic_id", 103);
        comic_page.append("image_url", newPage.image_url);
    
        console.log(comic_page);
    
        let reqObj = {};
        reqObj.method = "POST";
        // reqObj.headers = { "Content-Type": "application/json" };
        // reqObj.body = JSON.stringify({ comic_page });
        reqObj.body = comic_page ;
        console.log(reqObj);
        fetch("http://localhost:3000/comic_pages", reqObj)
          .then((resp) => resp.json())
          .then((comic_page) => {console.log(comic_page)
    
          });
      };

    return (
      <div>
        <form>
          <div className="form-group">
            <div className="dropdown">
            
            </div>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Page Name</label>
            <input
              type="text"
              className="form-control"
              id="pageName1"
              aria-describedby="emailHelp"
              placeholder="Enter Your Page Name"
              name="page_name"
              value={newPage.page_name}
              onChange={comicPageChangeHandler}
            />
            <small id="comicPageHelp" className="form-text text-muted">
              Must be jpeg/png file
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Page Description</label>
            <input
              type="text"
              className="form-control"
              id="pageDesc1"
              aria-describedby="emailHelp"
              placeholder="Enter Your Page Description"
              name="page_desc"
              value={newPage.pageDesc}
              onChange={comicPageChangeHandler}
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlFile1">Comic Page</label>
            <input
              type="file"
              className="form-control-file"
              id="exampleFormControlFile1"
              name="image_url"
              onChange={inputFileHandler}
            />
            <button onClick={submitNewComicPage}>Upload</button>
          </div>
        <br/> 
        </form>
       
      </div>
    );
  }


