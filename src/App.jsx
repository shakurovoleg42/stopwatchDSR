import { useState } from "react";
import Stopwatch from "./components/Stopwatch/Stopwatch";
import "./App.css";

export default function App() {
  const [stopwatches, setStopwatches] = useState([]);

  const addStopwatch = () => {
    setStopwatches([...stopwatches, { id: Date.now() }]);
  };

  const deleteStopwatch = (id) => {
    setStopwatches(stopwatches.filter((s) => s.id !== id));
  };

  return (
    <div className="app">
      <button className="add" onClick={addStopwatch}>
        Add Stopwatch
      </button>
      <div className="stopwatches">
        {stopwatches.map((s) => (
          <Stopwatch key={s.id} id={s.id} onDelete={deleteStopwatch} />
        ))}
      </div>
    </div>
  );
}
