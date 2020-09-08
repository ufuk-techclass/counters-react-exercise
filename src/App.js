import React from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

let randomno = () => {
  return Math.random();
};

const App = () => {
  const [counters, setCounters] = React.useState([
    { id: randomno(), value: 4 },
    { id: randomno(), value: 0 },
    { id: randomno(), value: 0 },
    { id: randomno(), value: 0 }
  ]);

  const handleIncrement = selectedcounter => {
    const counters_copy = [...counters];
    const index = counters.indexOf(selectedcounter);
    counters_copy[index] = { ...selectedcounter };
    counters_copy[index].value += 1;
    setCounters([...counters_copy]);
  };

  const handleReset = selectedcounter => {
    const counters_copy = [...counters];
    const index = counters.indexOf(selectedcounter);
    counters_copy[index] = { ...selectedcounter };
    counters_copy[index].value = 0;
    setCounters([...counters_copy]);
  };

  const handleAdd = () => {
    setCounters(counters => [
      ...counters,
      {
        id: randomno(),
        value: 0
      }
    ]);
  };

  const handleDelete = selectedcounter => {
    const counters_result = counters.filter(c => c.id !== selectedcounter.id);
    setCounters([...counters_result]);
  };

  return (
    <React.Fragment>
      <NavBar totalCounters={counters.length} />
      <main className="container">
        <Counters
          counters={counters}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onReset={handleReset}
          onAdd={handleAdd}
        />
      </main>
    </React.Fragment>
  );
};

export default App;
