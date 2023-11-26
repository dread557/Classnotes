"use client";
import { nunito } from "@/app/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideNav = () => {
  const pathName = usePathname();
  const NavLinks = [
    {
      name: "Notes",
      icon: ({ iconStyle, pathStyle }: any) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M7 1H2C1.44772 1 1 1.44772 1 2V9C1 9.55229 1.44772 10 2 10H7C7.55228 10 8 9.55229 8 9V2C8 1.44772 7.55228 1 7 1Z"
            stroke={iconStyle.stroke}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 1H13C12.4477 1 12 1.44772 12 2V5C12 5.55228 12.4477 6 13 6H18C18.5523 6 19 5.55228 19 5V2C19 1.44772 18.5523 1 18 1Z"
            stroke={iconStyle.stroke}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 10H13C12.4477 10 12 10.4477 12 11V18C12 18.5523 12.4477 19 13 19H18C18.5523 19 19 18.5523 19 18V11C19 10.4477 18.5523 10 18 10Z"
            stroke={iconStyle.stroke}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 14H2C1.44772 14 1 14.4477 1 15V18C1 18.5523 1.44772 19 2 19H7C7.55228 19 8 18.5523 8 18V15C8 14.4477 7.55228 14 7 14Z"
            stroke={iconStyle.stroke}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      link: "/",
    },
    {
      name: "Videos",
      icon: ({ iconStyle, pathStyle }: any) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="18"
          viewBox="0 0 22 18"
          fill="none"
        >
          <path
            d="M17 1H5C2.79086 1 1 2.79086 1 5V13C1 15.2091 2.79086 17 5 17H17C19.2091 17 21 15.2091 21 13V5C21 2.79086 19.2091 1 17 1Z"
            stroke={iconStyle.stroke}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 9L9 6V12L14 9Z"
            stroke={iconStyle.stroke}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      link: "/videos",
    },
    {
      name: "Class",
      icon: ({ iconStyle, pathStyle }: any) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <mask
            id="mask0_59_33"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <path d="M0 1.90735e-06H24V24H0V1.90735e-06Z" fill="white" />
          </mask>
          <g mask="url(#mask0_59_33)">
            <path
              d="M17.6484 1.17188V5.88281C17.6484 6.14166 17.4385 6.35156 17.1797 6.35156H12.4687C12.2099 6.35156 12 6.56147 12 6.82031V11.5313C12 11.7901 11.7901 12 11.5312 12H6.82031C6.56142 12 6.35156 12.2099 6.35156 12.4688V17.1797C6.35156 17.4385 6.1417 17.6484 5.88281 17.6484H1.17187C0.912984 17.6484 0.703125 17.8583 0.703125 18.1172V22.8281C0.703125 23.087 0.912984 23.2969 1.17187 23.2969H22.8281C23.087 23.2969 23.2969 23.087 23.2969 22.8281V1.17188C23.2969 0.913033 23.087 0.703127 22.8281 0.703127H18.1172C17.8583 0.703127 17.6484 0.913033 17.6484 1.17188Z"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.77526 0.703131L2.88098 7.59741"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.77527 4.34917V0.703136H6.12924"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      ),
      link: "/class",
    },
    {
      name: "Subject",
      icon: ({ iconStyle, pathStyle }: any) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clipPath="url(#clip0_45_52)">
            <path
              d="M11.6685 13.6709L11.6662 13.6784L11.6613 13.692C11.5488 14.0058 11.303 14.2595 10.9981 14.3849L10.9958 14.3858C10.6784 14.5149 10.3204 14.5017 10.0134 14.3484L10.0129 14.3482C9.34455 14.0138 8.52741 13.6053 7.87731 13.2804L7.06702 12.8755L6.82991 12.7571L6.76631 12.7253L6.74988 12.7171L6.7457 12.715L6.74465 12.7145L6.74439 12.7144L6.74432 12.7143L7.04224 12.1179L6.7443 12.7143L6.74409 12.7142C6.73453 12.7094 6.72987 12.7096 6.72742 12.7097C6.7232 12.71 6.71645 12.7116 6.70901 12.7162C6.70158 12.7208 6.69716 12.7261 6.69506 12.7297C6.69385 12.7318 6.69157 12.7359 6.69157 12.7469V21.0813V21.748H6.0249H2.91248H2.24581V21.0813V17.2656C2.24581 17.2456 2.22934 17.2291 2.20935 17.2291C1.39823 17.2291 0.739583 16.5705 0.739583 15.7593V13.5C0.739583 11.406 2.44474 9.77089 4.46869 9.77089H5.08997C5.6639 9.77089 6.23644 9.90519 6.74982 10.1614L6.75012 10.1616L6.75047 10.1617L6.75202 10.1625L6.75952 10.1662L6.78887 10.1808L6.90109 10.2366L7.30832 10.4392L8.60436 11.0838C9.58673 11.5724 10.6803 12.1163 11.125 12.3378L11.6685 13.6709ZM11.6685 13.6709C11.8496 13.153 11.6155 12.5819 11.1257 12.3382L11.6685 13.6709ZM8.74069 11.07L9.7042 11.5492V10.4731V3.70935C9.7042 2.85934 10.3969 2.16667 11.2469 2.16667H21.7906C22.6272 2.16667 23.3333 2.84173 23.3333 3.70935V11.9938C23.3333 12.8613 22.6271 13.5365 21.7906 13.5365H18.249H17.294L17.6232 14.433L20.3185 21.7718L20.3186 21.772C20.3255 21.7906 20.316 21.8116 20.297 21.8186L20.5269 22.4443L20.297 21.8186C20.2886 21.8216 20.2839 21.8224 20.2824 21.8226C20.2821 21.8226 20.2818 21.8227 20.2816 21.8227C20.2808 21.8224 20.2792 21.8218 20.2767 21.8204C20.2706 21.8171 20.2626 21.811 20.2556 21.8028C20.2517 21.7984 20.2497 21.7952 20.249 21.794L17.3768 13.9733L17.2164 13.5365H16.751H16.2581H15.7912L15.6316 13.9753L12.7878 21.7958C12.7877 21.7959 12.7873 21.7968 12.7864 21.7982C12.7853 21.7999 12.7835 21.8024 12.7808 21.8055C12.7746 21.8127 12.7677 21.8179 12.7624 21.8207C12.7579 21.8231 12.7565 21.8229 12.7577 21.8228C12.758 21.8228 12.7575 21.8229 12.7556 21.8226C12.7543 21.8224 12.7513 21.8219 12.7466 21.8205C12.7449 21.82 12.743 21.8194 12.7409 21.8186L12.7405 21.8185C12.7217 21.8116 12.7119 21.7907 12.7188 21.7719L12.7188 21.7718L15.3883 14.431L15.7136 13.5365H14.7618H12.2408H11.8428L11.6539 13.8868C11.3129 14.5196 10.5517 14.699 9.98034 14.4134L7.72926 13.288L6.76449 12.8057V13.8843V21.7844C6.76449 21.8045 6.74809 21.8209 6.72803 21.8209H2.20935C2.18929 21.8209 2.17289 21.8045 2.17289 21.7844V17.8541V17.375L1.71879 17.2222C1.10667 17.0163 0.666667 16.4366 0.666667 15.7593V13.5C0.666667 12.0111 1.50119 10.8088 2.59905 10.1911L3.42011 9.72919L2.71134 9.10855C2.14951 8.61658 1.79643 7.89776 1.79643 7.09845C1.79643 5.62549 2.99578 4.42601 4.46887 4.42601C5.94176 4.42601 7.14113 5.62547 7.14113 7.09845C7.14113 7.81326 6.8587 8.46309 6.39729 8.94479L5.73559 9.63558L6.61272 10.0172C6.67098 10.0426 6.7276 10.0689 6.78229 10.0961L6.78293 10.0964L8.74069 11.07ZM11.9854 11.9413L13.4737 8.96502C13.4827 8.94696 13.5047 8.93966 13.5227 8.94864L13.8208 8.35236L13.5225 8.94858C13.5406 8.9576 13.548 8.97947 13.5388 8.9977L11.7939 12.4874L11.6678 12.7396L11.7565 12.9929C11.7578 12.9972 11.7594 13.0022 11.7612 13.0077L11.9132 13.4635H12.3937H21.7906C22.1787 13.4635 22.5555 13.3081 22.8302 13.0332C23.1073 12.7561 23.2604 12.3848 23.2604 11.9938V3.70935C23.2604 3.31872 23.1075 2.94735 22.8306 2.67046C22.5557 2.39513 22.1788 2.23958 21.7906 2.23958H11.2469C10.4357 2.23958 9.77712 2.89851 9.77712 3.70935V11.1725V11.5856L10.147 11.7695C10.4923 11.9411 10.8145 12.1016 11.0918 12.2398L11.6877 12.5368L11.9854 11.9413ZM11.7515 12.9763L11.7516 12.9765L11.7515 12.9763ZM4.46869 4.49892C3.03478 4.49892 1.86934 5.66444 1.86934 7.09845C1.86934 8.53231 3.03483 9.69779 4.46869 9.69779C5.90269 9.69779 7.06822 8.53235 7.06822 7.09845C7.06822 5.6644 5.90274 4.49892 4.46869 4.49892Z"
              stroke={iconStyle.stroke}
              strokeWidth="1.33333"
            />
            <path
              d="M12.7531 5.17912H20.2844C20.3046 5.17912 20.3209 5.1954 20.3209 5.21558C20.3209 5.23564 20.3045 5.25203 20.2844 5.25203H12.7531C12.7329 5.25203 12.7167 5.23575 12.7167 5.21558C12.7167 5.1954 12.7329 5.17912 12.7531 5.17912Z"
              fill="black"
              stroke={iconStyle.stroke}
              strokeWidth="1.33333"
            />
            <path
              d="M16.5187 7.8151H20.2844C20.3046 7.8151 20.3209 7.83139 20.3209 7.85156C20.3209 7.87163 20.3045 7.88802 20.2844 7.88802H16.5187C16.4986 7.88802 16.4822 7.87163 16.4822 7.85156C16.4822 7.8315 16.4986 7.8151 16.5187 7.8151Z"
              fill="black"
              stroke={iconStyle.stroke}
              strokeWidth="1.33333"
            />
            <path
              d="M16.5187 10.4511H20.2844C20.3046 10.4511 20.3209 10.4674 20.3209 10.4875C20.3209 10.5075 20.3044 10.524 20.2844 10.524H16.5187C16.4987 10.524 16.4822 10.5075 16.4822 10.4875C16.4822 10.4675 16.4986 10.4511 16.5187 10.4511Z"
              fill="black"
              stroke={iconStyle.stroke}
              strokeWidth="1.33333"
            />
          </g>
          <defs>
            <clipPath id="clip0_45_52">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      link: "/subject",
    },
    {
      name: "Term",
      icon: ({ iconStyle, pathStyle }: any) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M7 1H2C1.44772 1 1 1.44772 1 2V9C1 9.55229 1.44772 10 2 10H7C7.55228 10 8 9.55229 8 9V2C8 1.44772 7.55228 1 7 1Z"
            stroke={iconStyle.stroke}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 1H13C12.4477 1 12 1.44772 12 2V5C12 5.55228 12.4477 6 13 6H18C18.5523 6 19 5.55228 19 5V2C19 1.44772 18.5523 1 18 1Z"
            stroke={iconStyle.stroke}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 10H13C12.4477 10 12 10.4477 12 11V18C12 18.5523 12.4477 19 13 19H18C18.5523 19 19 18.5523 19 18V11C19 10.4477 18.5523 10 18 10Z"
            stroke={iconStyle.stroke}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 14H2C1.44772 14 1 14.4477 1 15V18C1 18.5523 1.44772 19 2 19H7C7.55228 19 8 18.5523 8 18V15C8 14.4477 7.55228 14 7 14Z"
            stroke={iconStyle.stroke}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      link: "/term",
    },
  ];
  return (
    <aside className="bg-[#292A2F] w-[15.77%] absolute left-0 h-[calc(100vh-90px)] p-5">
      <header className="flex items-center gap-[0.9rem] mb-[1.9rem] px-[0.5rem] py-[1rem]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M7 1H2C1.44772 1 1 1.44772 1 2V9C1 9.55229 1.44772 10 2 10H7C7.55228 10 8 9.55229 8 9V2C8 1.44772 7.55228 1 7 1Z"
            stroke="#ECEEF5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 1H13C12.4477 1 12 1.44772 12 2V5C12 5.55228 12.4477 6 13 6H18C18.5523 6 19 5.55228 19 5V2C19 1.44772 18.5523 1 18 1Z"
            stroke="#ECEEF5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 10H13C12.4477 10 12 10.4477 12 11V18C12 18.5523 12.4477 19 13 19H18C18.5523 19 19 18.5523 19 18V11C19 10.4477 18.5523 10 18 10Z"
            stroke="#ECEEF5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 14H2C1.44772 14 1 14.4477 1 15V18C1 18.5523 1.44772 19 2 19H7C7.55228 19 8 18.5523 8 18V15C8 14.4477 7.55228 14 7 14Z"
            stroke="#ECEEF5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h5
          className={`${nunito.className} text-[1.8rem] font-semibold leading-[2.25rem] text-white`}
        >
          Dashboard
        </h5>
      </header>
      <nav>
        <ul className="flex flex-col gap-5">
          {NavLinks.map((each, index) => (
            <li key={index}>
              <Link
                style={{
                  background:
                    pathName === each.link ? "#7CF5B2" : "transparent",
                  color: pathName === each.link ? "#191C2D" : "#fff",
                }}
                className={`${nunito.className} text-white flex items-center gap-[0.9rem] text-[1.8rem]  px-[0.6rem] py-[1rem] focus:bg-[#7CF5B2] focus:text-[#191C2D] hover:bg-[#7CF5B2] hover:underline rounded-md`}
                href={each.link}
              >
                {React.cloneElement(
                  each.icon({
                    iconStyle: {
                      stroke: pathName === each.link ? "#191C2D" : "white",
                      fill: pathName === each.link ? "#191C2D" : "transparent",
                    },
                    pathStyle: {
                      stroke: pathName === each.link ? "#191C2D" : "white",
                      fill: pathName === each.link ? "#191C2D" : "transparent",
                    },
                  })
                )}
                <span>{each.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideNav;
