import { createContext, type ReactNode, useContext, useReducer } from "react";

export type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

const initialState: TimersState = {
  isRunning: true,
  timers: [],
}

type TimersContextValue = TimersState & {
  addTimer: (timer: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
}

const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
  const ctx = useContext(TimersContext);
  if (!ctx) {
    throw new Error('useTimersContext must be used within a TimersContextProvider');
  }
  return ctx;
}

type TimersContextProviderProps = {
  children: ReactNode;
};


type StartTimersAction = {
  type: 'START_TIMERS';
}

type StopTimersAction = {
  type: 'STOP_TIMERS';
}

type AddTimerAction = {
  type: 'ADD_TIMER';
  payload: Timer;
}

type TimersReducerAction = StartTimersAction | StopTimersAction | AddTimerAction;

function timersReducer(state: TimersState, action: TimersReducerAction): TimersState {
  switch (action.type) {
    case 'ADD_TIMER': {
      return {
        ...state,
        timers: [
          ...state.timers,
          action.payload as Timer,
        ],
      };
    }
    case 'START_TIMERS': {
      return {
        ...state,
        isRunning: true,
      };
    }
    case 'STOP_TIMERS': {
      return {
        ...state,
        isRunning: false,
      };
    }
    default: {
      return state;
    }
  }
}

export default function TimersContextProvider({children}: TimersContextProviderProps) {
  const [timersState, dispatch] = useReducer(timersReducer, initialState)
  
  const timersContext: TimersContextValue = {
    timers: timersState.timers,
    isRunning: timersState.isRunning,
    addTimer(timer: Timer) {
      console.log('add timer', timer);
      dispatch({type: 'ADD_TIMER', payload: timer})
    },
    startTimers() {
      console.log('start timers');
      dispatch({type: 'START_TIMERS'});
    },
    stopTimers() {
      console.log('stop timers');
      dispatch({type: 'STOP_TIMERS'});
    }
  }
  
  return <TimersContext.Provider value={timersContext}>
    {children}
  </TimersContext.Provider>
}