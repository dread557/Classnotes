export interface group {
  [x: string]: any;
  _id: string;
  name: string;
  __v: number;
}

interface IGroups {
  groups: group[];
  setGroups: (group: group) => void;
}

export default IGroups;
