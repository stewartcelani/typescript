import { create } from 'zustand';

type CounterStore = {
  count: number;
  increment: () => void;
  incrementBy: (value: number) => void;
};

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  incrementBy: (number) => set((state) => ({ count: state.count + number }))
}));
