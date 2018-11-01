/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-enable no-unused-vars */

class History extends React.Component {
  constructor(props) {
    super();
    console.log(props);
    this.state = {
      completedJobs: props.completedJobs,
    };
  }

  render() {
    console.log(this.state.completedJobs);
    return (
      <div>
        <h2>Completed Jobs</h2>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Pay</th>
              <th>Time</th>
              <th>Pay Per Hour</th>
            </tr>
            {this.state.completedJobs.map(job => (
              <tr key={job.id}>
                <td>{job.name}</td>
                <td>{job.amount}</td>
                <td>{job.time}</td>
                <td>{job.payPerHour}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default History;
