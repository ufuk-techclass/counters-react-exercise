import React from "react";
import Counter from "./counter";

const Counters = ({ counters, onAdd, onDelete, onIncrement, onReset }) => {
  return (
    <div>
      <button onClick={() => onAdd()} className="btn btn-info btn-sm m-2">
        Add
      </button>
      {counters.map(counter => (
        <Counter
          key={counter.id}
          counter={counter}
          onDelete={() => onDelete(counter)}
          onIncrement={() => onIncrement(counter)}
          onReset={() => onReset(counter)}
        />
      ))}
    </div>
  );
};

export default Counters;
