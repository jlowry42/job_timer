import React from 'react';
import Clock from "./Clock";
import { MyButton, ResetButton } from "./Button";
import DataForm from "./DataForm";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {...props}
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

  componentWillUnmount() {
    this.setState({ currentTimer: 0 });
    localStorage.setItem("currentTimer", JSON.stringify(0));
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
    console.log(this.state);
    return (
      <div className='home'>
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
    )
  }
}

export default Home;

