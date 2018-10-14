import React from "react";
import ReactDOM from "react-dom";
import Clock from "./components/Clock";
import { MyButton, ResetButton } from "./components/Button";
import DataForm from "./components/DataForm";

// all state lives in app?
// clock just displays time
// button in clock to start/stop time
// form to input job amount
// pay per hour display
// change interval to 10ths of a second

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      totalTimer: 0,
      currentTimer: 0,
      amount: 0,
      payPerHour: null,
      jobStartTime: null,
      startTime: null,
      running: false,
      clockInt: null
    };
  }

  componentDidMount = () => {
    if (localStorage.hasOwnProperty("currentTimer")) {
      this.setState({
        currentTimer: JSON.parse(localStorage.getItem("currentTimer"))
      });
    }
    if (localStorage.hasOwnProperty("totalTimer")) {
      this.setState({
        totalTimer: JSON.parse(localStorage.getItem("totalTimer"))
      });
    }
  };

  componentDidUpdate() {
    localStorage.setItem(
      "currentTimer",
      JSON.stringify(this.state.currentTimer)
    );
    localStorage.setItem("totalTimer", JSON.stringify(this.state.totalTimer));
  }

  onChange = e => {
    console.log(e.target.name);
    this.setState({ [e.target.name]: parseFloat(e.target.value) });
  };

  resetClock = () => {
    this.setState({ totalTimer: 0, currentTimer: 0 });
  };
  toggleClock = e => {
    if (!this.state.running) {
      if (this.state.jobStartTime === null) {
        this.setState({ jobStartTime: Date() });
      }

      this.setState({ startTime: new Date() }); // ??

      const interval = setInterval(() => {
        this.setState(prevState => {
          return {
            currentTimer: prevState.currentTimer + 1,
            totalTimer: prevState.totalTimer + 1
          };
        });
      }, 1000);
      this.setState({ clockInt: interval });
    } else {
      clearInterval(this.state.clockInt);
      this.setState({ currentTimer: 0 });
    }

    this.setState({ running: !this.state.running });
  };

  formatTime(sec) {
    const minutes = Math.floor(sec / 60);
    const hours = Math.floor(sec / 3600);
    const seconds = sec - hours * 3600 - minutes * 60;
    let result = "";
    if (hours) {
      result += hours + ":";
    }
    if (minutes) {
      result += minutes + ":";
    } else {
      result += "00:";
    }

    if (seconds < 10) {
      result += "0";
    }
    result += seconds;
    return result;
  }

  render() {
    return (
      <div className="App">
        <h1>Timer</h1>
        <h2>Start editing to see some magic happen!</h2>
        <MyButton running={this.state.running} toggle={this.toggleClock} />
        <ResetButton reset={this.resetClock} />
        <h3>{this.state.jobStartTime}</h3>
        <Clock running={this.state.running}>
          {this.formatTime(this.state.currentTimer)}
        </Clock>
        <Clock running={this.state.running}>
          {this.formatTime(this.state.totalTimer)}
        </Clock>
        <h3>
          ${((this.state.amount / this.state.totalTimer) * 3600).toFixed(2)}
        </h3>
        <DataForm onChange={this.onChange} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
