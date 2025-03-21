import { useCallback, useState } from "react";
import Stopwatch from "./components/Stopwatch/Stopwatch";
import "./App.css";
import { StopwatchData } from "./types/types";

export default function App() {
  const [stopwatches, setStopwatches] = useState<StopwatchData[]>([]);

  const addStopwatch = () => {
    setStopwatches((prev) => [...prev, { id: Date.now() }]);
  };

  const deleteStopwatch = useCallback((id: number) => {
    setStopwatches((prev) => prev.filter((s) => s.id !== id));
  }, []);

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
