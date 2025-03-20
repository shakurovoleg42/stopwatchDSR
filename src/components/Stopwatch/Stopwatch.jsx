import { useState, useEffect, useRef } from "react";
import "./style.css";
import { CiPlay1, CiPause1 } from "react-icons/ci";
import { VscDebugRestart } from "react-icons/vsc";
import { MdDeleteOutline } from "react-icons/md";

function Stopwatch({ id, onDelete }) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  const start = () => setIsRunning(true);
  const pause = () => setIsRunning(false);
  const clear = () => {
    setIsRunning(false);
    setTime(0);
  };

  const hours = String(Math.floor(time / 3600000)).padStart(2, "0");
  const minutes = String(Math.floor((time % 3600000) / 60000)).padStart(2, "0");
  const seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, "0");
  const milliseconds = String(time % 1000).padStart(3, "0");

  return (
    <div className="stopwatch">
      <span className="time">
        {hours}:{minutes}:{seconds}.{milliseconds}
      </span>
      <div className="controls">
        {!isRunning ? (
          <button onClick={start} title="Start">
            <CiPlay1 />
          </button>
        ) : (
          <button onClick={pause}>
            <CiPause1 title="Pause" />
          </button>
        )}
        <button onClick={clear} title="Restart">
          <VscDebugRestart />
        </button>
        <button onClick={() => onDelete(id)} title="Delete">
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
