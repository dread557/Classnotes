import Image from "next/image";
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex px-5 border-b-2 border-[#4E5058] bg-white h-[90px] justify-between items-center">
      <Link href="/">
        <Image
          src={"/icons/logo.svg"}
          alt="classnotes logo"
          width={174}
          height={40}
        />
      </Link>
      <button className="flex justify-center gap-[10px] items-center">
        <Image
          src={"/images/avatar.png"}
          alt="profile"
          width={40}
          height={40}
        />
        <span className="text-[#191C2D] text-[1.8rem]">Joshua</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="16"
          viewBox="0 0 15 16"
          fill="none"
        >
          <path
            d="M6.12241 2.81504L10.8099 7.50254C10.8755 7.56786 10.9275 7.64548 10.963 7.73095C10.9984 7.81641 11.0167 7.90804 11.0167 8.00058C11.0167 8.09313 10.9984 8.18476 10.963 8.27022C10.9275 8.35569 10.8755 8.43331 10.8099 8.49863L6.12241 13.1861C5.99032 13.3182 5.81117 13.3924 5.62436 13.3924C5.43756 13.3924 5.25841 13.3182 5.12632 13.1861C4.99423 13.054 4.92002 12.8749 4.92002 12.6881C4.92002 12.5013 4.99423 12.3221 5.12632 12.19L9.31636 8L5.12573 3.80996C4.99364 3.67787 4.91943 3.49872 4.91943 3.31191C4.91943 3.12511 4.99364 2.94596 5.12573 2.81387C5.25782 2.68178 5.43697 2.60757 5.62378 2.60757C5.81058 2.60757 5.98974 2.68178 6.12183 2.81387L6.12241 2.81504Z"
            fill="black"
          />
        </svg>
      </button>
    </header>
  );
};

export default Header;
