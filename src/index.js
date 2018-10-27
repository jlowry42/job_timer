import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import History from './components/History';
import Navbar from './components/Navbar';

// all state lives in app? - NO! in home
// clock just displays time - nope
// form to input job amount
// pay per hour display
// change interval to 10ths of a second

import './styles.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <h1>Job Timer</h1>
      <hr />
      <Route exact path="/" render={props => <Home {...props} />} />
      <Route path="/history" render={props => <History {...props} />} />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement,
);
