import React from "react";

const DataForm = props => {
  return (
    <form onSubmit={props.completeJob}>
    <input
      type="text"
      name="amount"
      placeholder="enter pay"
      value={props.amount}
      onChange={props.onChange}
    />

    <input  
      type="text"
      name="jobName"
      placeholder="job title"
      value={props.jobName}
      onChange={props.onChange}
    />
    <input type="submit" onSubmit={props.completeJob}/>
    </form>
  );
};

export default DataForm;
