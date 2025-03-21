import { useState, useEffect, useRef, memo } from "react";
import { formatTime } from "../../utils/timeFormatter";
import { StopwatchProps } from "../../types/types";
import "./style.css";
import { CiPlay1, CiPause1 } from "react-icons/ci";
import { VscDebugRestart } from "react-icons/vsc";
import { MdDeleteOutline } from "react-icons/md";

const Stopwatch: React.FC<StopwatchProps> = memo(({ id, onDelete }) => {
  console.log("Stopwatch re-rendered");

  const [time, setTime] = useState<number>(0);
  const { hours, minutes, seconds, milliseconds } = formatTime(time);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRunning]);

  const start = () => setIsRunning(true);
  const pause = () => setIsRunning(false);
  const clear = () => {
    setIsRunning(false);
    setTime(0);
  };

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
          <button onClick={pause} title="Pause">
            <CiPause1 />
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
});

export default Stopwatch;
