import React, { useEffect, useState } from "react";
import ImageUpload from "./components/ImageUpload";
import ImageGallery from "./components/ImageGallery";
import "./App.css";

export default function App() {
  const [images, setImages] = useState(() => {
    const savedImages = localStorage.getItem("images");
    return savedImages ? JSON.parse(savedImages) : [];
  });

  useEffect(() => {
    localStorage.setItem("images", JSON.stringify(images));
  }, [images]);

  const addImage = (newImage) => {
    setImages((prevImages) => [...prevImages, newImage]);
  };

  const deleteImage = (id) => {
    setImages((prevImages) =>
      prevImages.filter((image) => image.id !== id)
    );
  };

  return (
    <div className="container">
      <h1>Image Upload Dashboard</h1>

      <ImageUpload addImage={addImage} />

      <ImageGallery
        images={images}
        deleteImage={deleteImage}
      />
    </div>
  );
}