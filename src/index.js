import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import History from './components/History';
import Navbar from './components/Navbar';

// all state lives in app?
// clock just displays time
// button in clock to start/stop time
// form to input job amount
// pay per hour display
// change interval to 10ths of a second

import './styles.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Timer</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Route exact path="/"
        render={ props => <Home {...this.state} {...props}
        /> } />
        <Route path="/history"
        render={ props => <History {...props}/> }
        />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Router><App /></Router>, rootElement);
