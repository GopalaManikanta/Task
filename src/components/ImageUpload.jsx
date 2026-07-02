import React from 'react'

export default function ImageUpload({ addImage }) {
    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        const allowedTypes = [
            "image/jpeg",
            "image/jpg",
            "image/png",
            "image/webp",
        ];

        if (!allowedTypes.includes(file.type)) {
            alert("Please upload a valid image file");
            return;
        }

        const reader = new FileReader();

        reader.onload = () => {
            const imageData = {
                id: Date.now(),
                imageUrl: reader.result,
                fileName: file.name,
            };

            addImage(imageData);
        };

        reader.readAsDataURL(file);
    };

    return (
        <div className="upload-section">
            <input
                type="file"
                accept=".jpg,.jpeg,.png,.webp"
                onChange={handleFileChange}
            />
        </div>
    )
}
