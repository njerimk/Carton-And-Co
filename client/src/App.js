import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import NavBar from "./components/Home /NavBar.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import ComicIndex from './components/ComicIndex/ComicIndex.js'
import ComicProfile from './components/ComicProfile/ComicProfile.js'
import ComicPage from './components/ComicPages/ComicPage.js'
import Home from './components/Home /Home.js'
import UserIndex from './components/Users/UserIndex.js'
import UserProfile from './components/Users/UserProfile.js'
import PublishDashboard from './components/Publish/PublishDashBoard.js'
import axios from 'axios';

export default function App() {
  const[comics, setComics]=useState([])
  const [users, setUsers] =useState([])

  useEffect(() => {
      getComics()
      getUsers();


  }, [])
  
  const getComics = () => {
    axios.get('http://localhost:3000/comics')
      .then(res => {
        const comicsData = res.data; // Assuming res.data is an array of comics
        setComics(comicsData);
        console.log(comicsData);
      })
      .catch(error => {
        console.log('Error fetching comics', error);
      });
  };

  const getUsers= () => {
    axios.get('http://localhost:3000/users')
      .then(res => {
        const usersData = res.data; // Assuming res.data is an array of comics
        setUsers(usersData);
        console.log(usersData);
      })
      .catch(error => {
        console.log('Error fetching users', error);
      });
  };

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
        <Route path="/home" element={<Home getComics={getComics} comics={comics} />} />
          <Route path="/comics" element={<ComicIndex getComics={getComics} comics={comics} />} />
          <Route exact path="/comics/:id/*" element={<ComicProfile comics={comics} users={users} getComics={getComics} />} />
          <Route path="/users" element={<UserIndex getUsers={getUsers} users={users} />} />
          <Route path="/users/:id" element={<UserProfile getUsers={getUsers} users={users} />} />
          <Route path="/comics/:comicId/episodes/:episodeId" element={<ComicPage comics={comics} users={users} getComics={getComics} />} />
          <Route path="/publish" element={<PublishDashboard comics={comics} users={users}/>}/>
        </Routes>
      </Router>
    </div>
  );
}