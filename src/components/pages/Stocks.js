import React from "react";
import StockDropdown from "./StockDropdown";
import UploadImage from "./UploadImage";

export const Stocks = ({ className, ...props }) => {
  return (
    <div
      className={`bg-[#ffffff] w-full  h-[1117px] relative overflow-hidden ${className}`}
    >
      <div
        className="bg-[rgba(250,187,4,0.37)] rounded-[50%] w-[924px] h-[924px] absolute left-[-169px] top-[721px]"
        style={{ filter: "blur(150px)" }}
      ></div>
      <div
        className="bg-[rgba(15,157,87,0.30)] rounded-[50%] w-[1011px] h-[1011px] absolute left-[1394px] top-[442px]"
        style={{ filter: "blur(150px)" }}
      ></div>
      <div className="text-[rgba(0,0,0,0.05)] text-left font-['Poppins-SemiBold',_sans-serif] text-[300px] font-semibold absolute left-[570px] top-[-50px] w-[1050px] h-[486px]">
        GDSC{" "}
      </div>
      <div className="text-[#3771c8] text-left font-['Poppins-SemiBold',_sans-serif] text-[50px] font-semibold absolute left-[100px] top-[100px] w-[493px] h-[93px]">
        Admin Panel{" "}
      </div>
      <StockDropdown />

      <div class="flex items-center justify-center h-screen">
        <div
          className="box-border mt-[240px] w-[1300px] h-[500px] shadow-lg relative"
          style={{
            borderRadius: "10px",
            background: "linear-gradient(to right, #ff4300, #ff8d59)",
          }}
        >
          <div
            className="absolute right-0 bottom-0 w-[150px] h-[150px] linear-gradient(to right, #3b82f6, #93c5fd)"
            style={{
              borderRadius: "10px 0 0 0",
            }}
          ></div>
          <div className="w-[376px] h-[64px] mt-[70px] ml-10 [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[35px]">
            Function
            <select className="w-[500px] h-[46px] px-3 py-2 rounded-md border focus:outline-none focus:ring focus:border-blue-500">
              <option value="" disabled selected>
                ADD STOCKS
              </option>
              <option value="option1">T-shirt</option>
              <option value="option2">Bottle</option>
              <option value="option3">Stickers</option>
            </select>
          </div>
          <div className="w-[376px] h-[64px] mt-[80px] ml-10 [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[35px]">
            Product's Name
            <input
              id="input"
              type="number"
              className="w-[475px] h-[26px] px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="w-[376px] h-[64px] mt-[80px] ml-10 [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[35px]">
            Quantity
            <input
              id="input"
              type="number"
              className="w-[475px] h-[26px] px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          {/* UploadImage component placed here */}
          <div className="ml-[900px] mt-[-350px]">
            <div className="w-[376px] h-[64px] ml-[-30px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[35px]">
              Upload Image
            </div>
            <div
              className="w-[200px] h-[250px] ml-[-30px] bg-white rounded-lg mb-4 overflow-hidden"
              style={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}
            >
              <UploadImage />
            </div>

            <button className="w-[150px] h-[46px] mt-[20px] border-2 border-black bg-transparent text-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition duration-300 ease-in-out">
              submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
