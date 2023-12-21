export interface SingleClockData {
  isDay: boolean;
  city: string;
  timeBehind: string;
  time: string;
  date: string;
}

export interface TimerState {
  hours: number;
  minutes: number;
  seconds: number;
  isRunning: boolean;
}
