import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ChatBot from './components/ChatBot';
//import TestBot from './components/TestBot';
import HomePage from './components/Homepage';
import PicturesList from './components/PicturesList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/ChatBot" exact component={ChatBot} />
          <Route path="/PicturesList" exact component={PicturesList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

// <ChatBot />
