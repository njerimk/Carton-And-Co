import React, { Component } from "react";
import "./Comment.css";

class ProfileCommentForm extends Component {
    
    constructor(){
        super();
        this.state = {
                content: ""
             }

        }
    

    changeHandler = e => {
      e.preventDefault()
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e =>{
      e.preventDefault();
      
      const newComment = {
        content: this.state.content,
        commentable_id: this.props.comicPage.id,
        commentable_type: "ComicPage",
        user_id: 19
        
      }

    console.log(newComment)
    let reqObj = {}
        reqObj.method = "POST"
        reqObj.headers = {"Content-Type": "application/json"}
        reqObj.body = JSON.stringify(newComment)

    fetch("http://localhost:3000/comments", reqObj) 
    .then(resp => resp.json())
    .then(comment => console.log(comment))

      
       
}



  render() {
    return (
      <div className="container pb-cmnt-container" style={{marginLeft: "35%"}}>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="panel panel-info">
              <div className="panel-body">
                <input type ="text" name="content" value={this.state.content}

                    onChange={this.changeHandler}
                  placeholder="Write your comment here!"
                  className="pb-cmnt-textarea"

                ></input>
                <form className="form-inline"
                    onSubmit={this.submitHandler}
                >
                  <div className="btn-group">
                    <button className="btn" type="button">
                      <span className="fa fa-picture-o fa-lg"></span>
                    </button>
                    <button className="btn" type="button">
                      <span className="fa fa-video-camera fa-lg"></span>
                    </button>
                    <button className="btn" type="button">
                      <span className="fa fa-microphone fa-lg"></span>
                    </button>
                    <button className="btn" type="button">
                      <span className="fa fa-music fa-lg"></span>
                    </button>
                  </div>

                  <button

                    style={{ backgroundColor: "gray", borderStyle: "none", marginBottom: "100px",  marginLeft: "-100px", paddingRight:"50px", paddingLeft: "50px" }}
                    className="btn btn-primary pull-right"
                    type="submit"
                    id={this.props.comicPage.id}


                    >
                    Comment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileCommentForm;