import React from "react";

const DataForm = props => {
  return (
    <input
      type="text"
      name="amount"
      placeholder="enter pay"
      value={props.amount}
      onChange={props.onChange}
    />
  );
};

export default DataForm;
