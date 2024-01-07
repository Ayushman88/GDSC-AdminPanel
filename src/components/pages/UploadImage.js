import React, { useState, useEffect } from "react";

const UploadImage = ({ img, handleOnChange }) => {
  const [previewImage, setPreviewImage] = useState(null);

  function handleImageChange(e) {
    const selectedFile = e.target.files[0];

    // Preview the selected image
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setPreviewImage(imageUrl);
    }
  }

  return (
    <div className="h-full flex flex-col gap-y-3">
      <input
        type="file"
        accept="image/*"
        name="img"
        className="text-[1vw] bg-white"
        onChange={(e) => {
          handleImageChange(e);
          handleOnChange(e);
        }}
      />
      { previewImage && <img src={previewImage} alt="img" className="w-[10rem] mx-auto rounded-md object-cover" />}
    </div>
  );
};

export default UploadImage;
