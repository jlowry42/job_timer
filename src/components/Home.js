import React from 'react';
import Clock from './Clock';
import { MyButton, ResetButton } from './Button';
import DataForm from './DataForm';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalTimer: 0,
      currentTimer: 0,
      amount: 0,
      payPerHour: null,
      jobStartTime: null,
      startTime: null,
      running: false,
      clockInt: null,
    };
    // this.state = { ...props };
  }

  componentDidMount() {
    console.log('CDM');
    if (localStorage.getItem('currentTimer')) {
      this.setState({
        currentTimer: JSON.parse(localStorage.getItem('currentTimer')),
      });
    }
    if (localStorage.getItem('totalTimer')) {
      this.setState({
        totalTimer: JSON.parse(localStorage.getItem('totalTimer')),
      });
    }

    if (localStorage.getItem('jobStartTime')) {
      this.setState({
        jobStartTime: JSON.parse(localStorage.getItem('jobStartTime')),
      });
    }

    // event listener to clear timer on refresh
    window.addEventListener('beforeunload', this.cleanup);
    console.log('cleanup set');
  }

  cleanup() {
    console.log('cleaning up');
    localStorage.setItem('currentTimer', 0);
  }

  componentDidUpdate() {
    localStorage.setItem(
      'currentTimer',
      JSON.stringify(this.state.currentTimer),
    );
    localStorage.setItem('totalTimer', JSON.stringify(this.state.totalTimer));
  }

  componentWillUnmount() {
    this.setState({ currentTimer: 0 });
    localStorage.setItem('currentTimer', JSON.stringify(0));
  }

  onChange = e => {
    this.setState({ [e.target.name]: parseFloat(e.target.value) });
  };

  resetClock = () => {
    this.setState({ totalTimer: 0, currentTimer: 0 });
  };

  toggleClock = () => {
    if (!this.state.running) {
      if (this.state.jobStartTime === null) {
        this.setState({ jobStartTime: Date() });
        localStorage.setItem('jobStartTime', JSON.stringify(Date() ));
      }

      this.setState({ startTime: new Date() }); // ??

      const interval = setInterval(() => {
        this.setState((prevState) => {
          return {
            currentTimer: prevState.currentTimer + 1,
            totalTimer: prevState.totalTimer + 1,
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

  /* eslint class-methods-use-this: [1, { "exceptMethods": ["formatTime", "cleanup"] } ] */
  formatTime(sec) {
    const hours = Math.floor(sec / 3600);
    const minutes = Math.floor((sec - hours * 3600) / 60);
    const seconds = sec - hours * 3600 - minutes * 60;
    let result = '';
    if (hours) {
      result += `${hours}:`;
    }
    if (minutes) {
      if ((hours) && minutes < 10) {
        result += '0';
      }
      result += `${minutes}:`;
    } else {
      result += '00:';
    }

    if (seconds < 10) {
      result += '0';
    }
    result += seconds;
    return result;
  }

  render() {
    return (
      <div className="home">
        <MyButton running={this.state.running} toggle={this.toggleClock} />
        <ResetButton reset={this.resetClock} />
        <h4>Started at: {this.state.jobStartTime}</h4>
        <h3>Current Timer</h3>
        <Clock running={this.state.running}>
          {this.formatTime(this.state.currentTimer)}
        </Clock>
        <h3>Total Timer</h3>
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

export default Home;
