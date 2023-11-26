import { StateCreator } from "zustand";
import ISubject from "../types/ISubjects";
import { subject } from "../types/ISubjects";

const createSubjectSlice: StateCreator<ISubject> = (set) => ({
  subjects: [],
  setSubjects(subject: subject) {
    set((state) => ({ subjects: [...state.subjects, subject] }));
  },
});

export default createSubjectSlice;
