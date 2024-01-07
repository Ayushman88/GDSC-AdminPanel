import React, { useState, useEffect, useRef } from "react";
import SignOut from "./SignOut";
import { Link } from "react-router-dom";
import { SlArrowDown } from "react-icons/sl";

const LeaderboardDropdown = ({setPageState, pageState}) => {
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
    <div className="w-[17vw] h-auto">
      <div className="w-[17vw] h-auto flex justify-between items-center text-black text-[2vw] font-semibold ">
        <h1>Leaderboard</h1>
        <span onClick={toggleDropdown} className="cursor-pointer">
          <SlArrowDown />
        </span>
      </div>
      <span className="text-[#9d9d9d] text-[1.5vw] leading[52.2px]">
        2023-2024
      </span>

      {showDropdown && (
        <div
          ref={menuRef}
          className="bg-white text-[1vw] border border-gray-300 p-4 rounded-md shadow-lg font-medium text-center"
        >
          <div onClick={()=>setPageState(0)} className="block text-black hover:bg-gray-100">
            LeaderBoard
          </div>
          <div onClick={()=>setPageState(1)} className="block text-black hover:bg-gray-100 mt-2">
            Stocks
          </div>
          <div className="text-[#EA4335] hover:bg-gray-100 mt-2">
            <SignOut />
          </div>
        </div>
      )}
    </div>
  );
};

export default LeaderboardDropdown;
