// src/stores/counterStore.ts
import { create } from 'zustand';

// 1. Define the interface for your store's state and actions
interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

// 2. Create the store using Zustand's create function
export const useCounterStore = create<CounterState>((set) => ({
  // Initial state
  count: 0,

  // Actions that modify the state
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));
