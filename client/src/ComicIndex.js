import {Component} from 'react'
import ComicCard from './ComicCard'

class ComicIndex extends Component {
  //mapping is here 
  constructor(){
    super();
    this.state = {
      comics: []
    }
  }

  

      componentDidMount(){
        fetch("http://localhost:3000/comics")
        .then(resp => resp.json())
        .then(comics => this.setState({comics}))

        // fetch("http://localhost:3000/users")
        // .then(resp => resp.json())
        // .then(users=> console.log(users))

        // fetch("http://localhost:3000/comic_pages")
        // .then(resp => resp.json())
        // .then(comic_pages=> console.log(comic_pages))
      }
      
    render(){
    return (
        <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            {this.state.comics.map(
              comic =><ComicCard comic={comic} key ={comic.id} />

            )}
            
          </div>
        </div>
      </div>
    )
    }
}

export default ComicIndex
