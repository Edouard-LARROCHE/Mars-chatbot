import React from 'react';
import PicturesList from './PicturesList';
import './Pictures.css';

const PicturesCard = ({ img_src, earth_date, id }) => (
  <>
    <h2 className="titleCard">{earth_date}</h2>
    <div className="centerBox">
      <img className="picture" src={img_src} alt={img_src} width={400} height={350}></img>
    </div>

    <p className="CardID">{id}</p>
  </>
);

export default PicturesCard;
