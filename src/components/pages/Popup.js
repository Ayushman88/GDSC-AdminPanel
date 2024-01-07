import React, { useState, useEffect } from "react";

const Popup = ({ isOpen, closePopup, title, content }) => {

  useEffect(() => {
    window.addEventListener("keydown", closePopup);
    return () => window.removeEventListener("keydown", closePopup);
  }, []);

  if (!isOpen) {
    return null;
  }
  
  return (
    <div className="popup fixed top-0 left-0 w-[100%] h-[100%] bg-[#00000056] flex justify-center items-center">
      <div className="popup-inner bg-white p-2 rounded-md text-center min-h-[15vw] min-w-[20vw]">
        <h2 className="text-[1.4vw] font-medium mt-2">{title}</h2>
        <p className="text-[1vw] mt-3">{content}</p>
        <button onClick={closePopup} className="border rounded-md px-4 py-1 relative top-[5vw] text-[1vw] text-[#EA4335] border-[#EA4335] hover:text-white hover:bg-[#EA4335] transition duration-150">Close</button>
      </div>
    </div>
  );
};

export default Popup;
