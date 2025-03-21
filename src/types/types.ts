export interface StopwatchProps {
  id: number;
  onDelete: (id: number) => void;
}

export interface TimeFormat {
  hours: string;
  minutes: string;
  seconds: string;
  milliseconds: string;
}

export interface StopwatchData {
  id: number;
}
