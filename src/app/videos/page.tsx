import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon w-[5rem] h-[5rem]"
        viewBox="0 0 512 512"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          d="M256 232v-80"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="48"
          d="M256 88V72M132 132l-12-12"
        />
        <circle
          cx="256"
          cy="272"
          r="32"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
        <path
          d="M256 96a176 176 0 10176 176A176 176 0 00256 96z"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
      </svg>
      <p className="text-[1.6rem]">Videos page coming soon</p>
    </div>
  );
};

export default page;
