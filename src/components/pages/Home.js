import React from "react";
import AdminLoginButton from "../../components/Auth/AdminLoginButton.js";

export const Home = ({ className, ...props }) => {
  return (
    <div>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <svg
          width="300"
          height="562"
          viewBox="0 0 441 562"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "fixed",
            top: -20,
            left: 0,
            zIndex: 999,
          }}
        >
          <rect
            width="602.914"
            height="187.618"
            rx="93.8089"
            transform="matrix(0.887579 -0.460656 0.5404 0.841408 -196.325 404.137)"
            fill="#FABB04"
          />
          <rect
            width="602.914"
            height="187.618"
            rx="93.8089"
            transform="matrix(0.887579 0.460656 -0.5404 0.841408 -94.1338 -62)"
            fill="#0F9D57"
          />
        </svg>
      </div>
      <div style={{ position: "relative", height: "100vh" }}>
        <svg
          width="300"
          height="586"
          viewBox="0 0 520 586"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "fixed",
            top: 300,
            right: 0,
            zIndex: 999,
          }}
        >
          <rect
            width="635.557"
            height="201.362"
            rx="100.681"
            transform="matrix(0.880601 -0.473859 0.526604 0.850111 2.63965 301.165)"
            fill="#EA4335"
          />
          <rect
            width="635.557"
            height="201.362"
            rx="100.681"
            transform="matrix(0.880601 0.473859 -0.526604 0.850111 106.038 205.222)"
            fill="#4285F4"
          />
        </svg>
      </div>
      <svg
        width="828"
        height="1110"
        viewBox="0 0 828 1110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "fixed",
          bottom: 0,
          right: "50%",
        }}
      >
        <g filter="url(#filter0_f_428_3)">
          <circle cx="66" cy="762" r="462" fill="#FABB04" fill-opacity="0.37" />
        </g>
        <defs>
          <filter
            id="filter0_f_428_3"
            x="-696"
            y="0"
            width="1524"
            height="1524"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="150"
              result="effect1_foregroundBlur_428_3"
            />
          </filter>
        </defs>
      </svg>
      <svg
        width="828"
        height="1110"
        viewBox="0 0 697 1100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "fixed",
          bottom: 0,
          left: "50%",
        }}
      >
        <g filter="url(#filter0_f_428_4)">
          <circle
            cx="805.5"
            cy="294.5"
            r="505.5"
            fill="#0F9D57"
            fill-opacity="0.3"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_428_4"
            x="0"
            y="-511"
            width="1611"
            height="1611"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="150"
              result="effect1_foregroundBlur_428_4"
            />
          </filter>
        </defs>
      </svg>

      <div>
        <div className="text-[#3771c8] text-left font-['Poppins-SemiBold',_sans-serif] text-[50px] font-semibold absolute left-[600px] top-[200px] w-[493px] h-[93px]">
          Admin Panel <br />
          <span className="text-[#9d9d9d] ml-[60px] text-[36px] leading[52.2px]">
            2023-2024
          </span>
          <div
            className={
              "text-[rgba(0,0,0,0.05)] text-left font-['Poppins-SemiBold',_sans-serif] text-[300px] font-semibold relative w-[1189px] h-[465px] ml-[-280px] mt-[-20px]"
            }
          >
            GDSC{" "}
          </div>
        </div>
        <AdminLoginButton />
      </div>
    </div>
  );
};
