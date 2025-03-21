import { TimeFormat } from "../types/types";

export const formatTime = (time: number): TimeFormat => {
  return {
    hours: String(Math.floor(time / 3600000)).padStart(2, "0"),
    minutes: String(Math.floor((time % 3600000) / 60000)).padStart(2, "0"),
    seconds: String(Math.floor((time % 60000) / 1000)).padStart(2, "0"),
    milliseconds: String(time % 1000).padStart(3, "0"),
  };
};
