import React from "react";
import LeaderboardDropdown from "./LeaderboardDropdown";
import { useState } from "react";
import UploadImage from "./UploadImage";

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
      <div className=" flex flex-col justify-between p-10 bg-gradient-to-br from-blue-200 via-white to-blue-50 border-blue-200 border-4 w-[90%] h-[25rem] mb-5 mx-auto rounded-3xl shadow-lg">
        <div className="space-y-4  w-1/2">
          <div className="flex flex-col gap-2">
            <label className="font-semibold ml-2" htmlFor="email">
              Email
            </label>
            <input
              onChange={handleOnChange}
              value={data.email}
              className="rounded-lg py-1 m-2 text-[1vw] px-2 shadow-md focus:outline-none"
              type="text"
              name="email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold ml-2" htmlFor="points">
              Points to be Added
            </label>
            <input
              onChange={handleOnChange}
              value={data.points}
              className="rounded-lg py-1 text-[1vw] px-2 m-2 shadow-md focus:outline-none"
              type="text"
              name="points"
            />
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="px-8 py-2 text-[#3771C8] rounded-md border border-[#3771C8] text-[1vw] font-medium w-fit ml-auto hover:text-white hover:bg-[#3771c8] transition duration-150"
        >
          Submit
        </button>
      </div>

      {/* Stocks */}
      <div className=" flex justify-between items-center p-10 bg-gradient-to-br from-red-300 via-white to-red-50 border-red-200 border-4 w-[90%] h-[25rem] mb-5 mx-auto rounded-3xl shadow-lg">
        <div className="space-y-4  w-1/2">
          <div className="flex flex-col gap-2">
            <label className="font-semibold ml-2" htmlFor="email">
              Add/Remove
            </label>
            <select className="rounded-lg py-2 m-2 px-2  shadow-md focus:outline-none text-[1vw]">
              <option value="" disabled selected>
                Choose
              </option>
              <option value="">Add</option>
              <option value="">Remove</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold ml-2" htmlFor="email">
              Email
            </label>
            <input
              // onChange={handleOnChange}
              // value={data.email}
              className="rounded-lg py-1 m-2 text-[1vw] px-2 shadow-md focus:outline-none"
              type="text"
              // name="email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold ml-2" htmlFor="points">
              Points
            </label>
            <input
              // onChange={handleOnChange}
              // value={data.points}
              className="rounded-lg py-1 px-2 m-2 text-[1vw] shadow-md focus:outline-none"
              type="text"
              // name="points"
            />
          </div>
        </div>
        <div className="w-[30vw] h-[25vw] flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="">Upload Image</label>
            <div className="h-[18vw]">
              <UploadImage />
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="px-8 py-2 text-[#EA4335] rounded-md border border-[#EA4335] text-[1vw] font-medium h-fit w-fit ml-auto hover:text-white hover:bg-[#EA4335] transition duration-150"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
