export interface lesson {
  _id: string;
  classId: {
    _id: string;
    name: string;
    groupId: string;
    alias: string;
    __v: number;
  };
  subjectId: {
    _id: string;
    name: string;
    activeImage: string;
    groupId: string;
    defaultImage: string;
    introText: string;
    classification: string;
    __v: number;
  };
  termId: {
    _id: string;
    name: string;
    __v: number;
  };
  title: string;
  content: string;
  flag: boolean;
  likes: number;
  views: number;
  videoUrls: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface ILesson {
  lessons: lesson[];
  setLessons: (group: lesson) => void;
}

export default ILesson;
