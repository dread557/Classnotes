"use client";
import React, { useEffect, useState } from "react";
import CustomSelect, { SelectOption } from "./UI/CustomSelect";
import { nunito } from "@/app/fonts";
import useStore from "@/store/useStore";
import { useQuery } from "@tanstack/react-query";
import fetchGroups from "@/api/fetchGroups";
import { group } from "@/store/types/IGroups";
import { fetchSubjects } from "@/api/fetchSubjects";
import { subject } from "@/store/types/ISubjects";
import { fetchLessons } from "@/api/fetchLesson";
import { lesson } from "@/store/types/ILessons";
import Image from "next/image";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Notes = () => {
  const [selectedGroup, setSelectedGroup] = useState<group | string>({
    _id: "",
    name: "Select a group",
    __v: 0,
  });
  const [selectedTerm, setSelectedTerm] = useState("Select an option");
  const [selectedLesson, setSelectedLesson] = useState("");
  const { data: groupsData, isLoading } = useQuery({
    queryKey: ["groups"],
    queryFn: fetchGroups,
  });
  const { data: subjectsData, isLoading: subjectLoading } = useQuery({
    queryKey:
      selectedGroup && typeof selectedGroup !== "string"
        ? ["subjects", selectedGroup._id]
        : ["subjects"],
    queryFn: fetchSubjects,
    enabled: !!selectedGroup && typeof selectedGroup !== "string",
  });
  const { data: lessonsData, isLoading: lessonLoading } = useQuery({
    queryKey: ["lessons", selectedLesson],
    queryFn: fetchLessons,
  });

  const handleLessonSelect = (id: string) => {
    setSelectedLesson(id);
    console.log(id);
  };

  console.log(lessonsData);

  const { groups, setGroups } = useStore();
  useEffect(() => {
    if (!isLoading && groupsData) {
      setGroups(groupsData);
    }
  }, [isLoading, groupsData, setGroups]);
  const handleSelectGroupChange = (option: SelectOption) => {
    setSelectedGroup(option);
  };
  const handleSelectTermChange = (option: SelectOption) => {
    if (typeof option === "string") {
      setSelectedTerm(option);
    } else {
      // Handle the case where option is an object
      setSelectedTerm("Select an option");
    }
  };
  const terms = ["1st term", "2nd term", "3rd term"];

  return (
    <section>
      <header className="flex justify-between items-center px-5 py-4 bg-[#F6F6F6] border-b border-[#4E5058]">
        <h2
          className={`${nunito.className} text-black text-[3.3rem] font-[800] leading-[4.6rem]`}
        >
          Notes
        </h2>
        <section className="flex gap-[1rem] items-center">
          <CustomSelect
            options={groups[0]?.data}
            onChange={handleSelectGroupChange}
            value={typeof selectedGroup === "string" ? "" : selectedGroup}
          />
          <CustomSelect
            options={terms}
            onChange={handleSelectTermChange}
            value={selectedTerm}
          />
          <div className="relative">
            <svg
              className="absolute top-[1.6rem] left-[1rem] w-[1.6rem] h-[1.6rem]"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
            >
              <path
                d="M16.2727 15.7727L12.5909 12.0909M12.5909 12.0909C13.1818 11.5 13.6506 10.7984 13.9704 10.0263C14.2902 9.25418 14.4549 8.42664 14.4549 7.59091C14.4549 6.75518 14.2902 5.92764 13.9704 5.15553C13.6506 4.38342 13.1818 3.68186 12.5909 3.09091C11.9999 2.49996 11.2984 2.03119 10.5263 1.71138C9.75416 1.39156 8.92662 1.22695 8.09089 1.22695C7.25516 1.22695 6.42762 1.39156 5.65551 1.71138C4.8834 2.03119 4.18184 2.49996 3.59089 3.09091C2.39742 4.28438 1.72693 5.90308 1.72693 7.59091C1.72693 9.27874 2.39742 10.8974 3.59089 12.0909C4.78436 13.2844 6.40306 13.9549 8.09089 13.9549C9.77872 13.9549 11.3974 13.2844 12.5909 12.0909Z"
                stroke="#41424F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              className="border border-[#292A2F] bg-white rounded-[1.5rem] p-[1rem] pl-[3rem] text-[1.4rem] "
              type="text"
              placeholder="search"
            />
          </div>
          <button className="flex items-center gap-[1rem] py-[1rem] px-5 text-[1.8rem] font-bold border hover:bg-opacity-80 border-[#292A2F] text-[#191C2D] bg-[#7CF5B2] rounded-[1.5rem]">
            <span>Create note</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                d="M14.8571 10.0979H9.14286V15.4312C9.14286 15.7141 9.02245 15.9854 8.80812 16.1854C8.59379 16.3855 8.30311 16.4979 8 16.4979C7.6969 16.4979 7.40621 16.3855 7.19188 16.1854C6.97755 15.9854 6.85714 15.7141 6.85714 15.4312V10.0979H1.14286C0.839753 10.0979 0.549063 9.98549 0.334735 9.78545C0.120408 9.58541 0 9.3141 0 9.0312C0 8.7483 0.120408 8.47699 0.334735 8.27695C0.549063 8.07691 0.839753 7.96453 1.14286 7.96453H6.85714V2.6312C6.85714 2.3483 6.97755 2.07699 7.19188 1.87695C7.40621 1.67691 7.6969 1.56453 8 1.56453C8.30311 1.56453 8.59379 1.67691 8.80812 1.87695C9.02245 2.07699 9.14286 2.3483 9.14286 2.6312V7.96453H14.8571C15.1602 7.96453 15.4509 8.07691 15.6653 8.27695C15.8796 8.47699 16 8.7483 16 9.0312C16 9.3141 15.8796 9.58541 15.6653 9.78545C15.4509 9.98549 15.1602 10.0979 14.8571 10.0979Z"
                fill="#191C2D"
              />
            </svg>
          </button>
        </section>
      </header>
      <section className="grid grid-cols-12">
        <h3 className="col-span-2 text-[1.8rem]  border-b-4 border-[#4E5058] bg-white py-[1.4rem] px-[2rem]">
          Subjects
        </h3>
        <h3 className="col-span-1 text-[1.8rem]  border-b-4 border-[#4E5058] bg-white py-[1.4rem] px-[2rem]">
          ID
        </h3>
        <h3 className="col-span-2 text-[1.8rem]  border-b-4 border-[#4E5058] bg-white py-[1.4rem] px-[2rem]">
          Cover image
        </h3>
        <h3 className="col-span-4 text-[1.8rem]  border-b-4 border-[#4E5058] bg-white py-[1.4rem] px-[2rem]">
          Topic
        </h3>
        <h3 className="col-span-1 text-[1.8rem]  border-b-4 border-[#4E5058] bg-white py-[1.4rem] px-[2rem]">
          Viewed
        </h3>
        <h3 className="col-span-2 text-[1.8rem]  border-b-4 border-[#4E5058] bg-white py-[1.4rem] px-[2rem]">
          Actions
        </h3>
      </section>
      <section className="grid grid-cols-12 h-full">
        <div className="col-span-2 h-full ">
          <ul className="bg-[#ECEEF5] h-[calc(100vh-214.22px)] overflow-scroll no-scrollbar border-r border-[#191C2D]">
            {subjectLoading && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon animate-spin w-[1rem] h-[1rem] flex justify-center items-center absolute top-12 left-[50%]"
                viewBox="0 0 512 512"
              >
                <path
                  d="M400 148l-21.12-24.57A191.43 191.43 0 00240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 00181.07-128"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="32"
                />
                <path d="M464 97.42V208a16 16 0 01-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42z" />
              </svg>
            )}
            {!subjectLoading && subjectsData?.data?.length > 0 ? (
              subjectsData?.data?.map((each: subject) => (
                <li key={each._id} onClick={() => handleLessonSelect(each._id)}>
                  <button className="w-full p-5 text-[1.6rem] text-left text-[#191C2D] hover:bg-[white] cursor-pointer active:bg-[#45CD81] focus:bg-[#45CD81]">
                    {each.name}
                  </button>
                </li>
              ))
            ) : (
              <p>Please select a group</p>
            )}
          </ul>
        </div>
        <div className="col-span-10 h-[calc(100vh-214.22px)] overflow-scroll relative no-scrollbar">
          {!lessonLoading && lessonsData?.data?.length > 0 ? (
            lessonsData?.data?.map((lesson: lesson, index: number) => (
              <div
                key={lesson._id}
                className="grid grid-cols-10 gap-2 items-center  h-[8.3rem]border-b border-[#4E5058] group hover:bg-[#ECEEF5]"
              >
                <div className="col-span-1">
                  <p className="p-5 text-[1.6rem] text-[#191C2D]">{index}</p>
                </div>
                <div className="col-span-2">
                  <Image
                    className="w-[11.3rem] h-[6.3rem] rounded-[1.5rem] p-5"
                    src={lesson.subjectId.defaultImage}
                    alt="lesson"
                    width={113}
                    height={63}
                  />
                </div>
                <div className="col-span-4">
                  <p className="p-5 text-[1.6rem] text-[#191C2D]">
                    {lesson.title}
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="p-5 text-[1.6rem] text-[#191C2D] text-center">
                    {lesson.views}
                  </p>
                </div>
                <div className="col-span-2 ">
                  <div className="hidden group-hover:flex gap-[1rem] items-center p-5 text-[1.6rem] text-[#191C2D]">
                    <button className="p-[1rem] rounded-[1rem] border border-[#4E5058] bg-white hover:bg-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                      >
                        <path
                          d="M7.50002 1.875C10.87 1.875 13.6738 4.3 14.2619 7.5C13.6744 10.7 10.87 13.125 7.50002 13.125C4.13002 13.125 1.32627 10.7 0.73877 7.5C1.32627 4.3 4.13002 1.875 7.50002 1.875ZM7.50002 11.875C8.77479 11.8749 10.0118 11.442 11.0084 10.6472C12.0051 9.85238 12.7024 8.74278 12.9863 7.5C12.7017 6.25801 12.0041 5.14935 11.0075 4.35534C10.011 3.56133 8.77451 3.12897 7.50033 3.12897C6.22615 3.12897 4.98968 3.56133 3.99314 4.35534C2.99661 5.14935 2.29899 6.25801 2.01439 7.5C2.2982 8.74267 2.99544 9.8522 3.99198 10.647C4.98853 11.4418 6.22535 11.8747 7.50002 11.875ZM7.50002 10.3125C6.7541 10.3125 6.03873 10.0162 5.51128 9.48874C4.98384 8.96129 4.68752 8.24592 4.68752 7.5C4.68752 6.75408 4.98384 6.03871 5.51128 5.51126C6.03873 4.98382 6.7541 4.6875 7.50002 4.6875C8.24594 4.6875 8.96131 4.98382 9.48876 5.51126C10.0162 6.03871 10.3125 6.75408 10.3125 7.5C10.3125 8.24592 10.0162 8.96129 9.48876 9.48874C8.96131 10.0162 8.24594 10.3125 7.50002 10.3125ZM7.50002 9.0625C7.91442 9.0625 8.31185 8.89788 8.60487 8.60485C8.8979 8.31183 9.06252 7.9144 9.06252 7.5C9.06252 7.0856 8.8979 6.68817 8.60487 6.39515C8.31185 6.10212 7.91442 5.9375 7.50002 5.9375C7.08562 5.9375 6.68819 6.10212 6.39516 6.39515C6.10214 6.68817 5.93752 7.0856 5.93752 7.5C5.93752 7.9144 6.10214 8.31183 6.39516 8.60485C6.68819 8.89788 7.08562 9.0625 7.50002 9.0625Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                    <button className="p-[1rem] rounded-[1rem] border border-[#4E5058] bg-white hover:bg-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                      >
                        <path
                          d="M10.1831 1.43313C10.3003 1.31596 10.4593 1.25014 10.625 1.25014C10.7907 1.25014 10.9497 1.31596 11.0669 1.43313L13.5669 3.93313C13.684 4.05033 13.7499 4.20928 13.7499 4.375C13.7499 4.54073 13.684 4.69967 13.5669 4.81688L5.44187 12.9419C5.32469 13.0591 5.16575 13.125 5 13.125H2.5C2.33424 13.125 2.17527 13.0592 2.05806 12.9419C1.94085 12.8247 1.875 12.6658 1.875 12.5V10C1.87504 9.83426 1.94091 9.67531 2.05812 9.55813L8.30813 3.30813L10.1831 1.43313ZM8.75 4.63375L3.125 10.2588V11.875H4.74125L10.3663 6.25L8.75 4.63375ZM11.25 5.36625L12.2413 4.375L10.625 2.75875L9.63375 3.75L11.25 5.36625Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                    <button className="p-[1rem] rounded-[1rem] border border-[#4E5058] bg-white hover:bg-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                      >
                        <path
                          d="M4.375 2.5C4.375 2.16848 4.5067 1.85054 4.74112 1.61612C4.97554 1.3817 5.29348 1.25 5.625 1.25H9.375C9.70652 1.25 10.0245 1.3817 10.2589 1.61612C10.4933 1.85054 10.625 2.16848 10.625 2.5V3.75H13.125C13.2908 3.75 13.4497 3.81585 13.5669 3.93306C13.6842 4.05027 13.75 4.20924 13.75 4.375C13.75 4.54076 13.6842 4.69973 13.5669 4.81694C13.4497 4.93415 13.2908 5 13.125 5H12.4569L11.915 12.5887C11.8926 12.9041 11.7514 13.1993 11.5201 13.4147C11.2887 13.6302 10.9843 13.75 10.6681 13.75H4.33125C4.01509 13.75 3.71067 13.6302 3.4793 13.4147C3.24794 13.1993 3.10682 12.9041 3.08437 12.5887L2.54375 5H1.875C1.70924 5 1.55027 4.93415 1.43306 4.81694C1.31585 4.69973 1.25 4.54076 1.25 4.375C1.25 4.20924 1.31585 4.05027 1.43306 3.93306C1.55027 3.81585 1.70924 3.75 1.875 3.75H4.375V2.5ZM5.625 3.75H9.375V2.5H5.625V3.75ZM3.79625 5L4.33188 12.5H10.6687L11.2044 5H3.79625ZM6.25 6.25C6.41576 6.25 6.57473 6.31585 6.69194 6.43306C6.80915 6.55027 6.875 6.70924 6.875 6.875V10.625C6.875 10.7908 6.80915 10.9497 6.69194 11.0669C6.57473 11.1842 6.41576 11.25 6.25 11.25C6.08424 11.25 5.92527 11.1842 5.80806 11.0669C5.69085 10.9497 5.625 10.7908 5.625 10.625V6.875C5.625 6.70924 5.69085 6.55027 5.80806 6.43306C5.92527 6.31585 6.08424 6.25 6.25 6.25ZM8.75 6.25C8.91576 6.25 9.07473 6.31585 9.19194 6.43306C9.30915 6.55027 9.375 6.70924 9.375 6.875V10.625C9.375 10.7908 9.30915 10.9497 9.19194 11.0669C9.07473 11.1842 8.91576 11.25 8.75 11.25C8.58424 11.25 8.42527 11.1842 8.30806 11.0669C8.19085 10.9497 8.125 10.7908 8.125 10.625V6.875C8.125 6.70924 8.19085 6.55027 8.30806 6.43306C8.42527 6.31585 8.58424 6.25 8.75 6.25Z"
                          fill="#BC4A4A"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-[1.6rem] flex justify-center items-center mt-3">
              Please a select Subject
            </p>
          )}
          {lessonLoading && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon animate-spin w-[4rem] h-[4rem] flex justify-center items-center absolute top-12 left-[50%]"
              viewBox="0 0 512 512"
            >
              <path
                d="M400 148l-21.12-24.57A191.43 191.43 0 00240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 00181.07-128"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
              />
              <path d="M464 97.42V208a16 16 0 01-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42z" />
            </svg>
          )}
        </div>
      </section>
    </section>
  );
};

export default Notes;
