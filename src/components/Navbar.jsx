import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li className="items">Accueil 🌍 </li>
        </Link>

        <Link to="ChatBot">
          <li className="items">Tchat avec Nous 🤖 </li>
        </Link>

        <Link to="PicturesList">
          <li className="items">Galerie 📸 </li>
        </Link>
      </ul>
    </nav>
  );
}
