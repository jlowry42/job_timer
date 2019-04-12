import React from 'react';
import moment from 'moment';
import { Object } from 'core-js';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import runningFavicon from '../img/running_favicon.png';
import stoppedFavicon from '../img/stopped_favicon.png';
import Clock from './Clock';
import MyButton from './Button';
import DataForm from './DataForm';

const styles = theme => ({
  container: {
    width: '50%',
    backgroundColor: theme.palette.primary.dark,
    margin: '0 auto',
    padding: 20,
  },
  header: {
    marginBottom: 20,
    color: theme.palette.primary.contrastText,
  },
});
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.getCompletedJob = props.getCompletedJob.bind(this);
    this.state = {
      totalTimer: 0,
      currentTimer: 0,
      amount: '',
      jobName: '',
      payPerHour: null,
      jobStartTime: null,
      startTime: null,
      running: false,
      clockInt: null,
    };
  }

  componentDidMount() {
    this.favicon = document.getElementById('favicon');
    this.favicon.href = stoppedFavicon;
    Object.keys(this.state).forEach(key => {
      if (localStorage.getItem(key)) {
        this.setState({ [key]: JSON.parse(localStorage.getItem(key)) });
      }
    });
    window.addEventListener('beforeunload', this.cleanup);
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
    this.setState({ [e.target.name]: e.target.value });
    localStorage.setItem(e.target.name, JSON.stringify(e.target.value));
  };

  resetClock = () => {
    if (this.state.running) {
      this.toggleClock();
    }
    this.setState({
      totalTimer: 0,
      currentTimer: 0,
      jobStartTime: null,
      startTime: null,
    });
  };

  completeJob = e => {
    e.preventDefault();
    if (this.state.jobName && this.state.amount && this.state.totalTimer) {
      const d = new Date();
      const newJob = {
        id: Date.now(),
        name: this.state.jobName,
        time: this.formatTime(this.state.totalTimer),
        amount: this.state.amount,
        payPerHour: (
          (this.state.amount / this.state.totalTimer)
          * 3600
        ).toFixed(2),
        finishDate: `${d.getUTCMonth() + 1}/${d.getUTCDate()}`,
      };
      this.getCompletedJob(newJob);
      this.resetClock();
      this.setState({ jobName: '', amount: '' });
      localStorage.setItem('jobName', '');
      localStorage.setItem('amount', '');
    }
  };

  toggleClock = () => {
    if (!this.state.running) {
      this.favicon.href = runningFavicon;
      if (this.state.jobStartTime === null) {
        this.setState({ jobStartTime: Date() });
        localStorage.setItem('jobStartTime', JSON.stringify(Date()));
      }

      this.setState({ startTime: Date() }); // ??

      const interval = setInterval(() => {
        this.setState(prevState => {
          return {
            currentTimer: prevState.currentTimer + 1,
            totalTimer: prevState.totalTimer + 1,
          };
        });
      }, 1000);
      this.setState({ clockInt: interval });
    } else {
      this.favicon.href = stoppedFavicon;
      clearInterval(this.state.clockInt);
      this.setState({ currentTimer: 0, startTime: null });
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
      if (hours && minutes < 10) {
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
      <Paper className={this.props.classes.container} elevation={20}>
        <Typography className={this.props.classes.header} variant='h3'>Job Timer</Typography>
        <MyButton running={this.state.running} toggle={this.toggleClock} />
        <Button variant="contained" onClick={this.resetClock}>
          Reset
        </Button>
        <h3>Total Timer</h3>
          {this.state.jobStartTime
        && <h4>Job started at: {moment(this.state.jobStartTime).format('LT')}</h4>
          }
        <Clock running={this.state.running}>
          {this.formatTime(this.state.totalTimer)}
        </Clock>
        <h3>Current Timer</h3>
          {this.state.startTime
        && <h4>Current Timer started at {moment(this.state.startTime).format('LTS')}</h4>
          }
        <Clock running={this.state.running}>
          {this.formatTime(this.state.currentTimer)}
        </Clock>
        <h3>
          ${((this.state.amount / this.state.totalTimer) * 3600).toFixed(2)}
        </h3>
        <DataForm
          onChange={this.onChange}
          completeJob={this.completeJob}
          amount={this.state.amount}
          jobName={this.state.jobName}
        />
      </Paper>
    );
  }
}

export default withStyles(styles)(Home);
