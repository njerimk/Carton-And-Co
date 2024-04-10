import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import NavBar from "./components/Home /NavBar.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import ComicIndex from './components/Comics/ComicIndex.js'
import Home from './components/Home /Home.js'
import UserIndex from './components/Users/UserIndex.js'
import axios from 'axios';

export default function App(props) {
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
          <Route path="/users" element={<UserIndex getUsers={getUsers} users={users}/>} />
        </Routes>
      </Router>
    </div>
  );
}