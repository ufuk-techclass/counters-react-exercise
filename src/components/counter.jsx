import React from "react";

const Counter = props => {
  const getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  return (
    <div>
      <span className={getBadgeClasses()}>{props.counter.value}</span>
      <button
        onClick={() => props.onIncrement(props.counter)}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
      <button
        className="btn btn-success  btn-sm m-2"
        onClick={() => props.onReset(props.counter)}
      >
        Reset
      </button>
      <button
        onClick={() => props.onDelete(props.counter)}
        className="btn btn-danger btn-sm m-2"
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
