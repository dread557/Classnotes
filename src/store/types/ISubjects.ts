export interface subject {
  name: string;
  groupId: string;
  defaultImage: string;
  activeImage: string;
  introText: string;
  classification: string;
  _id: string;
  __v: number;
}

interface ISubjects {
  subjects: subject[];
  setSubjects: (subjects: subject) => void;
}

export default ISubjects;
