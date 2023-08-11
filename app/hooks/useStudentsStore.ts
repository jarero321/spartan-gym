import { User } from "@prisma/client";
import axios from "axios";
import { create } from "zustand";

interface StudentsStore {
  students: User[];
  fetchStudents: () => Promise<void>;
}

const useStudentsStore = create<StudentsStore>((set) => ({
  students: [],
  fetchStudents: async () => {
    try {
      const res = await axios.get<{ data: User[] }>(`/api/user/students`);
      set({ students: res.data.data });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useStudentsStore;
