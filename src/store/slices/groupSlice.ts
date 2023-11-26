import { StateCreator } from "zustand";
import IGroups from "../types/IGroups";
import { group } from "../types/IGroups";

const createGroupSlice: StateCreator<IGroups> = (set) => ({
  groups: [],
  setGroups(group: group) {
    set((state) => ({ groups: [...state.groups, group] }));
  },
});

export default createGroupSlice;
