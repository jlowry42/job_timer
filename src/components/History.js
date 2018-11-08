/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-enable no-unused-vars */
import StyledTable from './Table';
import { Button } from './Button';

class History extends React.Component {
  constructor(props) {
    super();
    this.state = {
      completedJobs: props.completedJobs,
    };
  }

  render() {
    return (
      <div>
        <h2>Completed Jobs</h2>
        <StyledTable>
          <tbody>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Pay</th>
              <th>Time</th>
              <th>Pay Per Hour</th>
            </tr>
            {this.state.completedJobs.map(job => (
              <tr key={job.id} id={job.id}>
                <td>{job.finishDate}</td>
                <td>{job.name}</td>
                <td>{job.amount}</td>
                <td>{job.time}</td>
                <td>{job.payPerHour}</td>
                <td><Button bgColor='black' padding='10px' onClick={this.props.editJob}>Edit</Button></td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </div>
    );
  }
}

export default History;
