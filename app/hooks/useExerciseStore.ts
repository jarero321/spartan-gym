import { ExerciseList } from "@prisma/client";
import axios from "axios";
import { create } from "zustand";

interface ExercisesStore {
  exercises: ExerciseList[];
  loading: boolean;
  fetchExercises: () => void;
  refetch: () => void;
}

const useExerciseStore = create<ExercisesStore>((set) => ({
  exercises: [],
  loading: false,
  fetchExercises: async () => {
    set({ loading: true });

    try {
      const { data } = await axios.get<{ data: ExerciseList[] }>(
        "/api/exercise/manage-exercise"
      );
      set({ exercises: data.data, loading: false });
    } catch (error) {
      console.log(error);
      set({ loading: false });
    }
  },
  refetch: async () => {
    set({loading: true})
    useExerciseStore.getState().fetchExercises();
  },
}));

export default useExerciseStore;
