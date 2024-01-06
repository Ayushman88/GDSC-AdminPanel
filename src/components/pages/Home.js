import React from "react";
import AdminLoginButton from "../../components/Auth/AdminLoginButton.js";
import left from "../../graphics/logo-left.png";
import right from "../../graphics/logo-right.png";

export const Home = ({ className, ...props }) => {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center overflow-hidden">

      <img src={left} alt="" className="absolute top-[5vw] left-0 w-[30vw]" />
      <img src={right} alt="" className="absolute bottom-[3vw] right-0 w-[30vw]" />
      <div className="absolute top-[-10vw] right-[-10vw] w-[40vw] h-[40vw] rounded-[50%] bg-[#0f9d5671] blur-3xl -z-10"></div>
      <div className="absolute bottom-[-10vw] left-[-10vw] w-[40vw] h-[40vw] rounded-[50%] bg-[#FABB045E] blur-3xl -z-10"></div>
      <div></div>


      <h1 className="text-[#3771c8] font-poppins font-semibold text-[5vw] text-center">
        Admin Panel
      </h1>
      <h1 className="text-[#9d9d9d] text-[2vw] font-semibold mb-[20vw]">2023-2024</h1>
      <h1 className="text-[rgba(0,0,0,0.05)] absolute bottom-[11.5vw] font-poppins font-bold text-[20vw] -z-10">
        GDSC
      </h1>
      <div className="absolute left-[45.5vw] bottom-[12vw]">
        <AdminLoginButton />
      </div>
    </div>
  );
};
