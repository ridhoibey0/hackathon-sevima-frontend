import { create } from "zustand";

const useUserStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,
  distance: "",
  setUser: (user) => {
    set({ user });
    localStorage.setItem("user", JSON.stringify(user));
  },
  setDistance: (newDistance) => {
    set((state) => ({ ...state, distance: newDistance }));
  },
}));

export default useUserStore;
