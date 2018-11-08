import React from "react"; // eslint-disable-line no-unused-vars
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import History from "./components/History";
import Navbar from "./components/Navbar";

// all state lives in app? - NO! in home
// clock just displays time - nope
// form to input job amount
// pay per hour display
// change interval to 10ths of a second

import "./styles.css";
import { Object } from "core-js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      completedJobs: []
    };
  }

  componentDidMount() {
    Object.keys(this.state).forEach(key => {
      if (localStorage.getItem(key)) {
        this.setState({ [key]: JSON.parse(localStorage.getItem(key)) });
      }
    });
    // for (let key in this.state) {
    //   if (localStorage.getItem(key)) {
    //     this.setState({ [key]: JSON.parse(localStorage.getItem(key)) });
    //   }
    // }
  }

  editJob = e => {
    const val = Number(e.target.parentElement.parentElement.id);
    const newAmount = prompt("Enter new amount");
    const newCompleted = this.state.completedJobs.map(job => {
      if (job.id === val) {
        job.amount = newAmount;
        const splitTime = job.time.split(":");
        const min = splitTime[splitTime.length - 2];
        let hrs = 0;
        if (splitTime.length > 2) {
          hrs = splitTime[splitTime.length - 3];
        }
        console.log(hrs);
        const seconds = splitTime[splitTime.length - 1];
        job.payPerHour = (
          Number(newAmount / (hrs * 3600 + min * 60 + seconds)) * 3600
        ).toFixed(2);
      }
      return job;
    });
    console.log(newCompleted);
    this.setState({ completedJobs: newCompleted });
    console.log(newAmount);
  };

  getCompletedJob = job => {
    const updatedJobs = [...this.state.completedJobs, job];
    this.setState(
      {
        completedJobs: updatedJobs
      },
      function() {
        // using this callback function ensures it will run after setState
        localStorage.setItem(
          "completedJobs",
          JSON.stringify(this.state.completedJobs)
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
            <History
              {...props}
              editJob={this.editJob}
              completedJobs={this.state.completedJobs}
            />
          )}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
