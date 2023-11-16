import { type ReactNode, createContext, useContext } from "react";

type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

const initialValue = null;

const TimersContext = createContext<TimersContextValue | null>(initialValue);
export function useTimersContext() {
  const timersCtx = useContext(TimersContext);

  if (timersCtx === null) {
    throw new Error("Context shouldn't be null");
  }

  return timersCtx;
}

type TimerContextProviderProps = {
  children: ReactNode;
};

export default function TimersContextProvider({ children }: TimerContextProviderProps) {
  const ctx: TimersContextValue = {
    timers: [],
    isRunning: false,
    addTimer(timerData) {
      // logic
    },
    startTimers() {},
    stopTimers() {},
  };

  return <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>;
}
