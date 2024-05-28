import { create } from "zustand";

const useStore = create((set) => ({
  toggleWantToChat: () => set((state) => ({ wantToChat: !state.wantToChat })),
}));

export default useStore;
