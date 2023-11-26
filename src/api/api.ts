// import { group } from "@/store/types/IGroups";
// import { subject } from "@/store/types/ISubjects";
// import { lesson } from "@/store/types/ILessons";
// import useStore from "@/store/useStore";
// import fetchGroups from "./fetchGroups";
// import { fetchSubjects } from "./fetchSubjects";
// import { fetchLessons } from "./fetchLesson";

// export const fetchAndSetGroups = async () => {
//   const { setGroups } = useStore.getState();
//   const groupsData: group[] = await fetchGroups();
//   setGroups(groupsData);
// };

// export const fetchAndSetSubjects = async (selectedGroup: group) => {
//   const { setSelectedGroup, setSubjects } = useStore.getState();
//   if (selectedGroup && typeof selectedGroup !== "string") {
//     setSelectedGroup(selectedGroup);
//     const subjectsData: subject[] = await fetchSubjects(selectedGroup._id);
//     setSubjects(subjectsData);
//   }
// };

// export const fetchAndSetLessons = async (selectedLesson: string) => {
//   const { setSelectedLesson, setLessons } = useStore.getState();
//   setSelectedLesson(selectedLesson);
//   const lessonsData: lesson[] = await fetchLessons(selectedLesson);
//   setLessons(lessonsData);
// };
