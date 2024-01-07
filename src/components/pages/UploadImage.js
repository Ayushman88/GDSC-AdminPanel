import React, { useState, useEffect, useCallback } from "react";
import Resizer from "react-image-file-resizer";

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleImageResize = useCallback(() => {
    if (image) {
      Resizer.imageFileResizer(
        image,
        300,
        300,
        "JPEG",
        100,
        0,
        (uri) => {
          setCroppedImage(uri);
        },
        "base64"
      );
    }
  }, [image]);

  useEffect(() => {
    handleImageResize();
  }, [handleImageResize]);

  return (
    <div>
      <input type="file" accept="image/*" className="text-[1vw] bg-white" onChange={handleImageChange} />
      {croppedImage && (
        <img src={croppedImage} alt="Cropped" style={{ width: "100%" }} />
      )}
    </div>
  );
};

export default UploadImage;
