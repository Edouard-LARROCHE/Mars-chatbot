import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './ChatBot.css';
import Navbar from './Navbar';

export default function ChatBot() {
  const [userInput, setUserInput] = useState('');
  const [userHistory, setUserHistory] = useState([]);
  const [botHistory, setBotHistory] = useState([]);

  const onKeyUp = (e) => {
    if (e.key === 'Enter') {
      setUserHistory([e.target.value, ...userHistory]);
      setUserInput('');
      matchReply(e.target.value);
    }
  };
  const handleChange = (e) => setUserInput(e.target.value);

  const matchReply = (userInput) => {
    const trigger = [
      ['bonjour', 'salut', 'hello'],
      ['comment ça va?', 'comment ca va?', 'est ce que ca va?'],
      ["qu'est ce que tu fais?"],
      ['tu proposes quoi?'],
      ['merci', 'merci beaucoup', 'super'],
      ['Salut', 'A bientôt', 'good bye'],
    ];

    const reply = [
      ['Bonjour Percy et Ginny', 'Bonjour Percy et Ginny', 'Bonjour Percy et Ginny'],
      ['Très bien et vous?', "Bien, belle journée aujourd'hui.", 'Oui! Je suis content de vous retrouver!'],
      ['Rien, comme vous...'],
      ['Allez voir les clichés que vous avez pris'],
      ['De rien.', 'Pas de problème.', 'Avec plaisir!'],
      ["Au revoir, c'était un plaisir de parler avec vous!"],
    ];

    const alternative = ['Hein ?', 'Mais encore ?', "Essaie encore s'il te plaît?", "Je t'écoute..."];

    let botMsg = generateReply(trigger, reply, userInput);

    if (!botMsg) {
      botMsg = alternative[Math.floor(Math.random() * alternative.length)];
    }
    setBotHistory([botMsg, ...botHistory]);
  };
  const generateReply = (trigger, reply, text) => {
    let item;
    let items;
    for (let x = 0; x < trigger.length; x++) {
      for (let y = 0; y < reply.length; y++) {
        if (text.includes(trigger[x][y])) {
          items = reply[x];
          item = items[Math.floor(Math.random() * items.length)];
        }
      }
    }
    return item;
  };

  return (
    <>
      <Navbar />
      <div className="chatbot-card">
        <div className="human-input">
          <InputGroup>
            <Form.Control type="text" placeholder="Dis-moi quelque chose" value={userInput} onChange={handleChange} onKeyPress={onKeyUp} />
          </InputGroup>
        </div>
        <div className="chatbox">
          {userHistory.map((userReply, indx) => (
            <div className="conversation-box">
              <div id="bot-reply">
                <h3>Bot : {botHistory[indx]}</h3>
              </div>

              <div id="user-input">
                <h3>P&G : {userReply}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <img className="imgMars2" src="./mars-14.png" />

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
