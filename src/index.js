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

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      completedJobs: [],
    };
  }

  componentDidMount() {
    for (let key in this.state) {
      if (localStorage.getItem(key)) {
        this.setState({ [key]: JSON.parse(localStorage.getItem(key)) });
      }
    }
  }

  getCompletedJob = job => {
    const updatedJobs = [...this.state.completedJobs, job];
    this.setState(
      {
        completedJobs: updatedJobs,
      },
      function() { // using this callback function ensures it will run after setState
        localStorage.setItem(
          'completedJobs',
          JSON.stringify(this.state.completedJobs),
        );
      }
    );
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Job Timer</h1>
        <hr />
        <Route
          exact
          path="/"
          render={props => (
            <Home {...props} getCompletedJob={this.getCompletedJob} />
          )}
        />
        <Route
          path="/history"
          render={props => (
            <History {...props} completedJobs={this.state.completedJobs} />
          )}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
