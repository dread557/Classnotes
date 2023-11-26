import { group } from "@/store/types/IGroups";
import React, { useState } from "react";

export type SelectOption = string | group;

interface CustomSelectProps {
  options: SelectOption[];
  onChange: (option: SelectOption) => void;
  value: SelectOption;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  onChange,
  value,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: SelectOption) => {
    if (typeof option === "string") {
      // Handle the case where option is a string
      onChange(option);
    } else {
      // Handle the case where option is an object
      onChange(option);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className="flex items-center gap-2 rounded-[1.5rem] text-[1.6rem]  justify-center w-full border border-[#191C2D] py-[1rem] px-3 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={() => setIsOpen(!isOpen)}
          >
            {typeof value === "string" ? value : (value as group).name}
            <svg
              className="w-[2rem] h-[2rem]"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M16.9133 8.66328L10.6633 14.9133C10.5762 15.0007 10.4727 15.07 10.3588 15.1173C10.2448 15.1647 10.1226 15.189 9.99925 15.189C9.87586 15.189 9.75368 15.1647 9.63973 15.1173C9.52577 15.07 9.42228 15.0007 9.33518 14.9133L3.08518 8.66328C2.90906 8.48716 2.81012 8.24829 2.81012 7.99922C2.81012 7.75015 2.90906 7.51128 3.08518 7.33516C3.2613 7.15904 3.50017 7.06009 3.74925 7.06009C3.99832 7.06009 4.23719 7.15904 4.41331 7.33516L10 12.9219L15.5867 7.33438C15.7629 7.15825 16.0017 7.05931 16.2508 7.05931C16.4999 7.05931 16.7387 7.15825 16.9149 7.33438C17.091 7.5105 17.1899 7.74937 17.1899 7.99844C17.1899 8.24751 17.091 8.48638 16.9149 8.6625L16.9133 8.66328Z"
                fill="black"
              />
            </svg>
          </button>
        </span>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <button
                key={typeof option === "string" ? option : option.name}
                className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-[1.4rem] text-left"
                role="menuitem"
                onClick={() => handleSelect(option)}
              >
                {typeof option === "string" ? option : option.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
