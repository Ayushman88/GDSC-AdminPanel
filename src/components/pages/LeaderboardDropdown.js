import React, { useState, useEffect, useRef } from "react";
import SignOut from "./SignOut";
import { Link } from "react-router-dom";
import { SlArrowDown } from "react-icons/sl";

const LeaderboardDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOut = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOut);

    return () => {
      document.removeEventListener("mousedown", handleClickOut);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="relative">
      <div className="text-[#000000] text-left font-['Poppins-SemiBold',_sans-serif] text-[40px] font-semibold absolute left-[1090px] top-[90px] w-[493px] h-[93px]">
        Leaderboard{" "}
        <span onClick={toggleDropdown} className="cursor-pointer">
          <SlArrowDown />
        </span>
        <br />
        <span className="text-[#9d9d9d] text-[36px] leading[52.2px]">
          2023-2024
        </span>
      </div>

      {showDropdown && (
        <div
          ref={menuRef}
          className="absolute left-[1290px] top-[120px] mt-2 bg-white border border-gray-300 p-4 rounded-md shadow-lg"
        >
          <Link
            to="/stocks"
            className="text-black block py-2 px-4 text-center hover:bg-gray-100"
          >
            Stocks
          </Link>

          <SignOut />
        </div>
      )}
    </div>
  );
};

export default LeaderboardDropdown;
