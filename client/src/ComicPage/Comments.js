import React, { Component } from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm'
export default class Comments extends Component {
   
    constructor(){
        super();
        this.state = {
                comments:[]
             }

        }
    

  
   

   
   
   
    render() {
        return (
            <div style={{ marginLeft: "40%", marginBottom: "40%"}}>
            <h1>Comments</h1>
             <CommentForm />
              <Comment style={{marginBottom: "200px"}} />  
            </div>
        )
    }
}


