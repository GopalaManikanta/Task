import React from 'react'

export default function ImageGallery({ images, deleteImage }) {
    if (images.length === 0) {
        return <p className="empty-text">No Images Uploaded</p>;
    }

    return (
        <div className="gallery">
            {images.map((image) => (
                <div className="card" key={image.id}>
                    <img
                        src={image.imageUrl}
                        alt={image.fileName}
                    />

                    <p>{image.fileName}</p>

                    <button
                        onClick={() => deleteImage(image.id)}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    )
}
