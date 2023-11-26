import { StateCreator } from "zustand";
import ILesson from "../types/ILessons";
import { lesson } from "../types/ILessons";

const createLessonSlice: StateCreator<ILesson> = (set) => ({
  lessons: [],
  setLessons(lesson: lesson) {
    set((state) => ({ lessons: [...state.lessons, lesson] }));
  },
});

export default createLessonSlice;
