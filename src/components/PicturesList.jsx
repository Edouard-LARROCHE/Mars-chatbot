import React, { useState, useEffect } from 'react';
import PicturesCard from './PicturesCard';
import './Pictures.css';
import axios from 'axios';
import Navbar from './Navbar';

export default function PicturesList() {
  const [pictures, setPictures] = useState([]);

  const RequestPicturesAPI = async () => {
    await axios
      .get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=2zm9e3GMefiNgORMhT9ykW6C5E7Y3znAQV4qzLv5')
      .then((response) => response.data)
      .then((data) => {
        setPictures(data.photos[Math.floor(Math.random() * 750)]);
        console.log(pictures);
      });
  };
  useEffect(() => {
    RequestPicturesAPI();
  }, []);

  return (
    <div className="Background">
      <Navbar />
      <div>
        <div>
          <div className="boxCenter2">
            <p className="Histoire">
              Nous ne sommes plus seul ! Je vous remercie d'être parmis nous ! Vous êtes arrivés ici grâce à MarsBot, mais nous avons un problème, en
              effet après une panne d'huile et les batteries déchargées, nous n'avons pas été en mesure de pouvoir prendre des photos correctes.
              Cliquez sur Suivant pour parcourir nos rushs en toute simplicité !
            </p>
          </div>
        </div>
        <div className="BoxCardPictures">
          <PicturesCard img_src={pictures.img_src} />
        </div>
        <button className="button" onClick={RequestPicturesAPI}>
          Suivant !
        </button>
      </div>
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
    </div>
  );
}
