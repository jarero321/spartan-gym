import useSWR from "swr";
import axios from "axios";
import { create } from "zustand";
import { User } from "@prisma/client";

interface StudentsStore {
  students: User[];
  loading: boolean;
  fetchStudents: () => void;
}

const fetcher = async (...args: Parameters<typeof axios>) => {
  const res = await axios(...args);
  return res.data;
};

const useStudentsStore = create<StudentsStore>((set) => ({
  students: [],
  loading: false,
  fetchStudents: async () => {
    set({ loading: true });

    try {
      const { data } = await axios.get<{ data: User[] }>("/api/user/students");
      set({ students: data.data, loading: false });
    } catch (error) {
      console.log(error);
      set({ loading: false });
    }
  },
}));

export default useStudentsStore;
