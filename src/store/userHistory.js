import { create } from "zustand";

const useHistoryStore = create((set) => ({
  history: JSON.parse(localStorage.getItem("history")) || null,
  setHistory: (history) => {
    set({ history });
    localStorage.setItem("history", JSON.stringify(history));
  },
}));
export default useHistoryStore;
