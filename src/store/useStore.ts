import { create } from "zustand";
import ISubjects from "./types/ISubjects";
import createSubjectSlice from "./slices/subjectSlice";
import createGroupSlice from "./slices/groupSlice";
import IGroups from "./types/IGroups";
import ILesson from "./types/ILessons";
import createLessonSlice from "./slices/lessonSlice";

const useStore = create<ISubjects & IGroups & ILesson>()((...a) => ({
  ...createSubjectSlice(...a),
  ...createGroupSlice(...a),
  ...createLessonSlice(...a),
}));

export default useStore;
