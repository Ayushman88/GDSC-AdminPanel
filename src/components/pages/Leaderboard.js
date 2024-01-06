import React from "react";
import LeaderboardDropdown from "./LeaderboardDropdown";
import { useState } from "react";

export const Leaderboard = ({ className, ...props }) => {
  const [data, setData] = useState({
    email: "",
    points: "",
  });
  function handleOnChange(event) {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  }
  function handleSubmit() {
    console.log(data);
  }

  return (
    <div className={`w-[100vw] h-auto overflow-hidden ${className}`}>
      <div className="bg-[rgba(250,187,4,0.37)] rounded-[50%] w-[40vw] h-[30vw] absolute left-[-10vw] bottom-[-10vw] -z-10 blur-3xl"></div>
      <div className="bg-[rgba(15,157,87,0.30)] rounded-[50%] w-[40vw] h-[30vw] absolute right-[-10vw] bottom-[-10vw] -z-10 blur-3xl"></div>
      <h1 className="text-[rgba(0,0,0,0.05)] font-poppins text-[20vw] font-bold absolute right-[5vw] top-[-4vw] -z-10">
        GDSC
      </h1>
      <div className="w-[84vw] h-[15vw] ml-[7vw] mt-[6vw] text-[#3771c8] font-poppins font-semibold flex justify-between">
        <h1 className="text-[3vw]">Admin Panel</h1>
        <LeaderboardDropdown />
      </div>

      {/* LeaderBoard */}
      <div className=" flex flex-col justify-between p-10 bg-gradient-to-br from-blue-200 via-white to-blue-50 border-blue-200 border-4 w-[90%] h-[25rem] mx-auto rounded-3xl shadow-lg">
        <div className="space-y-4  w-1/2">
          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="email">
              Email
            </label>
            <input
              onChange={handleOnChange}
              value={data.email}
              className="rounded-lg py-1 px-2 shadow-md focus:outline-none"
              type="text"
              name="email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="points">
              Points
            </label>
            <input
              onChange={handleOnChange}
              value={data.points}
              className="rounded-lg py-1 px-2 shadow-md focus:outline-none"
              type="text"
              name="points"
            />
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="px-8 py-2 text-[#3771C8] rounded-md border border-[#3771C8] w-fit ml-auto hover:text-white hover:bg-[#3771c8] transition duration-150"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
