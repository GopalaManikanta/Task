import React from 'react'
import { useEffect, useState } from "react";
import ImageUpload from "./components/ImageUpload";
import ImageGallery from "./components/ImageGallery";
import "./App.css";

export default function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const savedImages = JSON.parse(localStorage.getItem("images"));

    if (savedImages) {
      setImages(savedImages);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("images", JSON.stringify(images));
  }, [images]);

  const addImage = (newImage) => {
    setImages([...images, newImage]);
  };

  const deleteImage = (id) => {
    const updatedImages = images.filter(
      (image) => image.id !== id
    );

    setImages(updatedImages);
  };

  return (
    <div className="container">
      <h1>Image Upload Dashboard</h1>
      // all are the same
      <ImageUpload addImage={addImage} />

      <ImageGallery
        images={images}
        deleteImage={deleteImage}
      />
    </div>
  )
}
