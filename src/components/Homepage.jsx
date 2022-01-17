import React from 'react';
import './homepage.css';
import { FaRobot } from 'react-icons/fa';
import Navbar from './Navbar';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="Menu">
        <FaRobot className="robot" />
      </div>
      <div className="box">
        <h1 className="title">Bienvenue sur MarsBot</h1>
      </div>
      <img className="bgMars" src="./mars.png"></img>
      <div className="Footer">
        <div className="col2">
          <a href="https://fr-fr.facebook.com/" target="_blank">
            <img src="facebook.png" alt="Facebook Icon" width="50px" height="50px" />
          </a>
          <a href="https://www.instagram.com/?hl=fr" target="_blank">
            <img src="Insta.png" alt="Instagram Icon" width="50px" height="50px" />
          </a>
          <a href="https://twitter.com/?lang=fr" target="_blank">
            <img src="twiter.png" alt="Twitter Icon" width="50px" height="50px" />
          </a>
        </div>
      </div>
    </>
  );
}
