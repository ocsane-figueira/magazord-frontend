import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface HistoryState {
  history: string[];
  addToHistory: (username: string) => void;
  clearHistory: () => void;
}

export const useHistorySearchStore = create<HistoryState>()(
  persist(
    (set) => ({
      history: [],

      addToHistory: (username: string) => {
        set((state) => {
          const parsedUsername = username.trim().toLowerCase();

          const filteredHistory = state.history.filter(
            (user) => user.toLowerCase() !== parsedUsername,
          );

          return {
            history: [parsedUsername, ...filteredHistory],
          };
        })
      },

      clearHistory: () => set({ history: [] }),
    }),
    {
      name: 'github-search-history',
    },
  ),
);
