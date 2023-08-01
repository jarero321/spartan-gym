import { User } from "@prisma/client";
import { create } from "zustand";

interface useUserStoreProps {
  user: User | null;
  setUser: (user: User | null) => void;
}

const useUserStore = create<useUserStoreProps>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

export default useUserStore;
